import { useEffect, useRef } from "react";
import { FormMUI } from "../common/FormMUI/FormMUI";
import { MessageList } from "../MessageList/MessageList";
import '../../App.css';

export const Messenger = ({ messages, addMessage }) => {

  const endMessage = useRef();

  useEffect(() => {
    endMessage.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="App-content">
      <div className="Messages">
        <MessageList messages={messages} />
        <div ref={endMessage} />
        <FormMUI addMessage={addMessage} />
      </div>
    </div>);
};
