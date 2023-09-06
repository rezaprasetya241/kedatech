import React from "react";

function Button(props) {
  return (
    <button
      className=" border border-solid border-1 border-orange rounded-lg px-4 py-1 text-orange font-medium hover:bg-orange hover:text-white cursor-pointer"
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
