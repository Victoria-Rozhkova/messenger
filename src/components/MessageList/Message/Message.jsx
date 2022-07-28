import React from "react";

export const Message = ({ author, text }) => {

  return (
    <div>
      <span>{author}: {text}</span>
    </div>
  );
};