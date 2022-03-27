import React from "react";
import "./FormButton.css";

const FormButton = (props) => {
  const { variant, disabled, type, fullWidth, rounded,color } = props;
  return (
    <button
      type={type}
      className={`fida__fm_btn ${
        variant === "cancel"
          ? "fida__btn_cancel"
          : variant === "save"
          ? "fida__btn_save"
          : variant === "transparent"
          ? "fida__btn_transparent"
          : variant === "outlined"
          ? "fida__btn_outlined"
          : "fida__btn_colored"
      } ${fullWidth ? "fida__btn_full" : ""} ${
        disabled ? "btn__disabled" : ""
      } ${rounded ? "btn__rounded" : ""} ${color? "btn_custom_color": ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default FormButton;
