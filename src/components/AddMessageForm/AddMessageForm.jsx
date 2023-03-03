import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import style from './AddMessageForm.module.css';

export const AddMessageForm = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const focus = useRef();

  useEffect(() => {
    focus?.current.focus();
  });

  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addMessage(value);
      setValue('');
    }
    focus?.current.focus();
  };

  return (
    <form className={style.form} onSubmit={submit}>
      <TextField inputRef={focus} id="outlined-basic" onChange={changeValue} value={value} label="Message" variant="outlined" />
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </form>
  );
};

AddMessageForm.propTypes = {
  addMessage: PropTypes.func,
};