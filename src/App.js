import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Chats } from "./components/Chats/Chats";
import { Form } from "./components/common/Form/Form";
import { FormMUI } from "./components/common/FormMUI/FormMUI";
import { MessageList } from "./components/MessageList/MessageList";
import { AUTHORS } from "./utils/constants";

const App = () => {
  const [messageList, setMessageList] = useState([]);

  const endMessage = useRef();

  const sendMessage = (author, text) => {
    return { id: Date.now(), author: author, text: text };
  };

  const addMessage = (text) => {
    const newMessage = sendMessage(AUTHORS.Me, text);
    setMessageList((prevState) => [...prevState, newMessage]);
  };

  useEffect(() => {
    let timeOut;
    endMessage.current?.scrollIntoView();
    if (messageList[messageList.length - 1]?.author === AUTHORS.Me) {
      timeOut = setTimeout(() => {
        const robotMessage = sendMessage(AUTHORS.Bot, "I am a Bot");

        setMessageList((prevState) => [...prevState, robotMessage]);
      }, 1000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <Chats />
          <hr />
          <div className="Messages">
            <MessageList messageList={messageList} />
            <div ref={endMessage} />
            <FormMUI addMessage={addMessage} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
