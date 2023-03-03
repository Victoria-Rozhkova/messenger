import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { onValue } from "firebase/database";
import { Chat } from "./Chat";
import { addChatThunk, getChatsThunk } from "store/actions/chatsActions";
import { getChatList } from "store/selectors/chats.selectors";
import { chatsRef } from "services/firebase";
import style from './Chats.module.css';

export const Chats = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(getChatList);

  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addChat(value);
      setValue("");
    }
  };

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      const chats = [];
      snapshot.forEach(child => {
        chats.push(child.val());
      });
      dispatch(getChatsThunk(chats));
    });
    return unsubscribe;
  }, []);

  const addChat = (chatName) => {
    dispatch(addChatThunk(chatName));
  };

  return (
    <>
      <div className={style.chatListFixed}>
        <ul className={style.chats}>
          {chatList.map(chat => {
            return <Chat key={chat.id} chatId={chat.id} chatName={chat.name} />;
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
