import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FormMUI } from "../common/FormMUI/FormMUI";
import { MessageList } from "../MessageList/MessageList";
import '../../App.css';

export const Messenger = ({ messageList, addMessageThunk }) => {

  const endMessage = useRef();
  const { chatId } = useParams();

  const handleAddMessage = (text) => {
    addMessageThunk(text, chatId);
  };

  useEffect(() => {
    endMessage.current?.scrollIntoView();
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
