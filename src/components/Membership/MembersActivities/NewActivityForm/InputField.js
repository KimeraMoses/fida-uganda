import React from "react";
import classes from "./InputField.module.css";

const InputField = (props) => {
  const { type, value, name, disabled, placeholder, onChange, fullWidth } =
    props;
  return (
    // <div
    //   className={`${classes.input_field_wrapper} ${
    //     disabled ? classes.input_field__disabled : ""
    //   } ${fullWidth ? classes.fullWidth : ""}`}
    // >
      <input
        // className={classes.input_field}
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
    // </div>
  );
};

export default InputField;
