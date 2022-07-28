import React, { useEffect, useRef, useState } from "react";

export const Form = ({ addMessage }) => {
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
    <form onSubmit={submit}>
      <input ref={focus} type="text" value={value} onChange={changeValue} />
      <button>Send</button>
    </form>
  );
};