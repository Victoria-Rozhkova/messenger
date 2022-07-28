import React, { useState } from "react";

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    addMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={value} onChange={changeValue} />
      <button>Send</button>
    </form>
  );
};