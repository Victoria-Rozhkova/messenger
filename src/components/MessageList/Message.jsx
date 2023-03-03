import React from "react";
import PropTypes from 'prop-types';

export const Message = ({ author, text }) => {
  return (
    <div>
      <span>{author}: {text}</span>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};