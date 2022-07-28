import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AUTHORS } from "../../utils/constants";
import { FormMUI } from "../common/FormMUI/FormMUI";
import { MessageList } from "../MessageList/MessageList";
import '../../App.css';

export const Messenger = () => {
  const [messageList, setMessageList] = useState({ 1: [], 2: [], 3: [] });

  const endMessage = useRef();

  const { chatId } = useParams();
  console.log('messageList[chatId][messageList[chatId]] : ', messageList[chatId][messageList[chatId]]);
  const sendMessage = (author, text) => {
    return { id: Date.now(), author: author, text: text };
  };

  const addMessage = (text) => {
    const newMessage = sendMessage(AUTHORS.Me, text);
    setMessageList((prevMessages) => ({
      ...prevMessages,
      [chatId]: [...prevMessages[chatId], newMessage]
    }));
  };

  useEffect(() => {
    let timeOut;
    endMessage.current?.scrollIntoView();
    if (messageList[chatId][messageList[chatId].length - 1]?.author === AUTHORS.Me) {
      timeOut = setTimeout(() => {
        const robotMessage = sendMessage(AUTHORS.Bot, "I am a Bot");

        setMessageList((prevMessages) => ({
          ...prevMessages,
          [chatId]: [...prevMessages[chatId], robotMessage]
        }));
      }, 1000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [messageList]);
  return (
    <div className="App-content">
      <hr className="line" />
      <div className="Messages">
        <MessageList messageList={messageList[chatId]} />
        <div ref={endMessage} />
        <FormMUI addMessage={addMessage} />
      </div>
    </div>);
};
