import React from 'react'
import "./Button.css";

const Button = (props) => {
    const { variant, disabled, fullWidth } = props
  return (
    <button
      className={`fida__btn ${
        variant === "secondary" ? "fida__btn_secondary" :variant==="tartiary"? "fida__btn_tartiary": "fida__btn_primary"
      } ${fullWidth? "fida__btn_full": ""} ${disabled? "btn__disabled" : ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;