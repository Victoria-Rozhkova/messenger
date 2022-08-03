import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import "../../App.css";
import ChatsContainer from "../Chats/ChatsContainer";
import MessengerContainer from "../Messenger/MessengerContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="Link">
        <Link to="/chats">Chats</Link>
      </div>
      <Routes>
        <Route path="/chats" element={<ChatsContainer />}>
          <Route path=":chatId" element={<MessengerContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
