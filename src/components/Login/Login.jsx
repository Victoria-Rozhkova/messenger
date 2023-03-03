import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login, signUp } from "services/firebase";
import style from './Login.module.css';

export const Login = ({ isSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    try {
      await signUp(email, password);
    }
    catch (err) {
      setError(err.message);
    }
  };

  const handleSignIn = async (e) => {
    try {
      await login(email, password);
    }
    catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }
    setEmail('');
    setPassword('');
  };
  return (
    <div className={style.login}>
      <div className={style.toggleLogin}>
        <h2>{isSignUp ? "SignUp" : "Login"}</h2>
        <Link to={`${isSignUp ? '/' : '/signup'}`}>{!isSignUp ? "SignUp" : "Login"}</Link>
      </div>

      <form className={style.formLogin} onSubmit={handleSubmit}>
        <label htmlFor="email">Email:
          <div><input type="email" id="email" placeholder="email" value={email} onChange={handleOnChangeEmail} /></div> </label>
        <label htmlFor="pass">Password:
          <div><input type="password" id="pass" placeholder="password" value={password} onChange={handleOnChangePassword} /></div>
        </label>
        {error && <span>{error}</span>}
        <button className={style.btnLogin}>Login</button>
      </form>
    </div>
  );
};