import React, { useEffect } from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Chats } from "../Chats/Chats";
import { Messenger } from "../Messenger/Messenger";
import "../../App.css";
import { addChat, deleteChat } from "../../store/actions/chats/chatsActions";
import { createDialog } from "../../store/actions/messages/messagesActions";

export const Router = () => {
  const chatList = useSelector((state) => state.chats.chats);
  const dispatch = useDispatch();

  const handleAddChat = (chatName) => {
    const id = Date.now().toString();
    const messages = { [id]: [] };
    dispatch(addChat(id, chatName));
    dispatch(createDialog(messages));
  };

  const handleDeleteChat = (id) => {
    dispatch(deleteChat(id));
  };

  return (
    <BrowserRouter>
      <div className="Link">
        <Link to="/chats">Chats</Link>
      </div>
      <Routes>
        <Route
          path="/chats"
          element={
            <Chats
              chatList={chatList}
              addChat={handleAddChat}
              deleteChat={handleDeleteChat}
            />
          }
        >
          <Route path=":chatId" element={<Messenger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
