import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

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

Form.propTypes = {
  addMessage: PropTypes.func,
};