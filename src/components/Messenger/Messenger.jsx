import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { AUTHORS } from "../../utils/constants";
import { FormMUI } from "../common/FormMUI/FormMUI";
import { MessageList } from "../MessageList/MessageList";
import '../../App.css';

export const Messenger = ({ messageList, addMessage }) => {

  const endMessage = useRef();
  const { chatId } = useParams();

  const sendMessage = (author, text) => {
    return { id: Date.now(), author: author, text: text };
  };

  const handleAddMessage = (text) => {
    const newMessage = sendMessage(AUTHORS.Me, text);
    addMessage(newMessage, chatId);
  };

  useEffect(() => {
    let timeOut;
    endMessage.current?.scrollIntoView();
    if (messageList[chatId][messageList[chatId]?.length - 1]?.author === AUTHORS.Me) {
      timeOut = setTimeout(() => {
        const robotMessage = sendMessage(AUTHORS.Bot, "I am a Bot");
        addMessage(robotMessage, chatId);
      }, 1000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [messageList]);

  return (
    <div className="App-content">
      <div className="Messages">
        <MessageList messageList={messageList[chatId]} />
        <div ref={endMessage} />
        <FormMUI addMessage={handleAddMessage} />
      </div>
    </div>);
};
