import { useState } from "react";
import { Chat } from "./Chat/Chat";
import { Outlet } from "react-router-dom";
import style from './Chats.module.css';
import { TextField } from "@mui/material";

export const Chats = ({ chatList, addChatThunk, deleteChatThunk, createDialog }) => {
  const [value, setValue] = useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addChatThunk(value);
      setValue("");
    }
  };
  return (
    <>
      <div className={style.chatListFixed}>
        <ul className={style.chats}>
          {chatList.map(chat => {
            return <Chat key={chat.id} chatId={chat.id} chatName={chat.name} deleteChatThunk={deleteChatThunk} />;
          })}
        </ul>
        <form className={style.form} onSubmit={submit} >
          <TextField onChange={changeValue} className={style.inputTextField} id="standard-basic" label="New chat" variant="standard" value={value} />
        </form>
      </div>
      <Outlet />
    </>
  );
};
