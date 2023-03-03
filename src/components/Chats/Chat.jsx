import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteChatThunk } from "store/actions/chatsActions";

export const Chat = ({ chatName, chatId }) => {

  const dispatch = useDispatch()

  const onDeleteHandler = (chatId) =>{
    dispatch(deleteChatThunk(chatId))
  }

  return <li>
    <Link to={`/chats/${chatId}`}>{chatName}</Link>
    <IconButton onClick={() => onDeleteHandler(chatId)} color="primary" aria-label="delete" size="small">
      <DeleteIcon fontSize="inherit" />
    </IconButton></li>;
};

Chat.propTypes = {
  chatName: PropTypes.string,
  chatId: PropTypes.string,
};