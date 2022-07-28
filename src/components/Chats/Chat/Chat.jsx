import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Chat = ({ chatName, chatId }) => {

  return <li><Link to={`/chats/${chatId}`}>{chatName}</Link></li>;
};

Chat.propTypes = {
  chatName: PropTypes.string,
  chatId: PropTypes.string,
};