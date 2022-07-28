import React from "react";
import { Message } from "./Message/Message";
import style from './MessageList.module.css';

export const MessageList = ({ messageList }) => {
  return (
    <div className={style.messages}>
      {messageList.map(msg => {
        return <Message key={msg.id} text={msg.text} author={msg.author} />;
      })}
    </div>
  );
};