import { useState } from "react";
import { Chat } from "./Chat/Chat";
import { Outlet } from "react-router-dom";
import style from './Chats.module.css';

export const Chats = () => {
  const [chatList, setChatList] = useState([{ id: "1", name: 'CHAT 1' }, { id: "2", name: 'CHAT 2' }, { id: "3", name: 'CHAT 3' }]);

  return (
    <>
      <ul className={style.chats}>
        {chatList.map(chat => {
          return <Chat key={chat.id} chatId={chat.id} chatName={chat.name} />;
        })}
      </ul>
      <Outlet />
    </>
  );
};
