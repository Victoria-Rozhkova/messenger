import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/common/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";

const App = () => {
  const [messageList, setMessageList] = useState([
    { author: "Test author", text: "Test message" },
  ]);

  const addMessage = (text) => {
    const newMessage = { author: "Me", text: text };
    setMessageList((prevState) => [...prevState, newMessage]);
  };

  useEffect(() => {
    let timeOut;
    if (messageList[messageList.length - 1]?.author === "Me") {
      timeOut = setTimeout(() => {
        const robotMessage = { author: "Robot", text: "I am a robot" };

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
        <MessageList messageList={messageList} />
        <Form addMessage={addMessage} />
      </header>
    </div>
  );
};

export default App;
