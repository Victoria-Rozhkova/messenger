import React from "react";
import PropTypes from 'prop-types';
import { Message } from "./Message";
import style from './MessageList.module.css';

export const MessageList = ({ messages }) => {
  return (
    <div className={style.messages}>
      {messages.map(msg => {
        return <Message key={msg.id} text={msg.text} author={msg.author} />;
      })}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
};