import React from "react";

const SmButton = (props) => {
  let { clickedOption, onClick, option, key } = props;
  return (
    <button
      className={`option-btn ${clickedOption}`}
      key={key}
      onClick={onClick}>
      {option}
    </button>
  );
};

export default SmButton;
