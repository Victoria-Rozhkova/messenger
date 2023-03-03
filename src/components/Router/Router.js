import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import "../../App.css";
import { Profile } from "../Profile/Profile";
import { Login } from "../Login/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Chats } from "../Chats/Chats";
import { Messenger } from "../Messenger/Messenger";

export const Router = () => {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div className="Link">
        <NavLink to="/profile">Profile</NavLink>|
        <NavLink to="/chats"> Chats</NavLink>
      </div>
      <Routes>
        <Route path="/profile" element={<PrivateRoute authed={authed} />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/chats" element={<PrivateRoute authed={authed} />}>
          <Route path="/chats" element={<Chats />}>
            <Route path=":chatId" element={<Messenger />} />
          </Route>
        </Route>
        <Route path="/" element={<PublicRoute authed={authed} />}>
          <Route path="" element={<Login />} />
          <Route path="/signup" element={<Login isSignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
