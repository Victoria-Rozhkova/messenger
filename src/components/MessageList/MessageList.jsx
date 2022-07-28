import React from "react";
import { Message } from "../Message/Message";

export const MessageList = ({ messageList }) => {
  return (
    <div>
      {messageList.map(msg => {
        return <Message key={msg.text} text={msg.text} author={msg.author} />;
      })}
    </div>
  );
};