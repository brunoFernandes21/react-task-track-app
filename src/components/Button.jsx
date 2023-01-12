import React from "react";

const Button = (props) => {
    const {color, text, showAddForm} = props
   
  return (
    <button onClick={showAddForm} className="btn" style={{background: color}}>{text}</button>
  )
};

export default Button;
