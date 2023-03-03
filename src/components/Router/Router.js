import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import "App.css";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services/firebase";
import { Login } from "components/Login/Login";
import { Profile } from "components/Profile/Profile";
import { Chats } from "components/Chats/Chats";
import { Messenger } from "components/Messenger/Messenger";
import { Loading } from "components/Loading/Loading";

export const Router = () => {
  const [authed, setAuthed] = useState(false);
  const [initialization, setInitialization] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
      setInitialization(true);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div className="Link">
        <NavLink to="/profile">Profile</NavLink>|
        <NavLink to="/chats"> Chats</NavLink>
      </div>
      {initialization ? (
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
      ) : (
        <Loading />
      )}
    </BrowserRouter>
  );
};
