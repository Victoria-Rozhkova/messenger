import { useState } from "react";
import { Chat } from "./Chat/Chat";

export const Chats = () => {
  const [chatList, setChatList] = useState([{ id: Date.now(), name: 'CHAT 1' }]);

  return (
    <ul>
      {chatList.map(chat => {
        return <Chat key={chat.id} chatName={chat.name} />;
      })}
    </ul>
  );
};
