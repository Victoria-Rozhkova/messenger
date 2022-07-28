import React from "react";
import { Link } from "react-router-dom";

export const Chat = ({ chatName, chatId }) => {

  return <li><Link to={`/chats/${chatId}`}>{chatName}</Link></li>;
};