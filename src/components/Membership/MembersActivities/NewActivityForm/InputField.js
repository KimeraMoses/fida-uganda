import React from "react";
import classes from "./InputField.module.css";

const InputField = (props) => {
  const { type, value, name, disabled, placeholder, onChange, fullWidth } =
    props;
  return (
    <input
      className={`${classes.input_field_wrapper} ${
        disabled ? classes.input_field__disabled : ""
      } ${fullWidth ? classes.fullWidth : ""}`}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default InputField;
