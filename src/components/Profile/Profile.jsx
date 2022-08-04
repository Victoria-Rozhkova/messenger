import React from "react";
import { logOut } from "../../services/firebase";
import style from './Profile.module.css';

export const Profile = () => {
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div className={style.profile}>
      <h2>Profile</h2> <button onClick={handleLogout}>Logout</button>
    </div>
  );
};