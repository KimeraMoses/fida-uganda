import React from "react";
import "./FormButton.css";

const FormButton = (props) => {
  const { variant, disabled, type, fullWidth } = props;
  return (
    <button
      type={type}
      className={`fida__fm_btn ${
        variant === "cancel"
          ? "fida__btn_cancel"
          : variant === "save"
          ? "fida__btn_save"
          : "fida__btn_colored"
      } ${fullWidth ? "fida__btn_full" : ""} ${
        disabled ? "btn__disabled" : ""
      }`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default FormButton;
