import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const Chat = ({ chatName, chatId, deleteChat }) => {

  return <li>
    <Link to={`/chats/${chatId}`}>{chatName}</Link>
    <IconButton onClick={() => deleteChat(chatId)} color="primary" aria-label="delete" size="small">
      <DeleteIcon fontSize="inherit" />
    </IconButton></li>;
};

Chat.propTypes = {
  chatName: PropTypes.string,
  chatId: PropTypes.string,
};