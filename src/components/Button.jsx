import React from "react";

const Button = (props) => {
    const {color, text} = props
    
  return (
    <button className="btn" style={{background: color}}>{text}</button>
  )
};

export default Button;
