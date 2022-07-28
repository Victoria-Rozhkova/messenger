import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { Chats } from "../Chats/Chats";
import { Messenger } from "../Messenger/Messenger";
import "../../App.css";

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="Link">
        <Link to="/chats">Chats</Link>
      </div>
      <Routes>
        <Route path="/chats" element={<Chats />}>
          <Route path=":chatId" element={<Messenger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
