import React from "react";
import { logOut } from "../../services/firebase";
import style from './Profile.module.css';
import user from '../../assets/images/user.png';

export const Profile = () => {
  const userName = `User`;
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div className={style.profile}>
      <h2>Profile</h2>
      <img src={user} alt="user" />
      <span>{userName}</span>
      <button className={style.btnLogin} onClick={handleLogout}>Logout</button>
    </div>
  );
};