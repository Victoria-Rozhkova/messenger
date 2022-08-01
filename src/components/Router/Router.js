import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Chats } from "../Chats/Chats";
import { Messenger } from "../Messenger/Messenger";
import "../../App.css";
import { addChat, deleteChat } from "../../store/actions/chats/chatsActions";

export const Router = () => {
  const chatList = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const handleAddChat = (chatName) => {
    const id = Date.now().toString();
    dispatch(addChat(id, chatName));
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
