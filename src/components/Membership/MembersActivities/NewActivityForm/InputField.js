import React from "react";
import classes from "./InputField.module.css";
import { Field, useField } from "formik";

const InputField = ({ type, name, disabled, fullWidth, ...rest }) => {
  const [field] = useField(name);

  return (
    // <div
    //   className={`${classes.input_field_wrapper} ${
    //     disabled ? classes.input_field__disabled : ""
    //   } ${fullWidth ? classes.fullWidth : ""}`}
    // >
    <Field
      className={`${classes.input_field_wrapper} ${
        disabled ? classes.input_field__disabled : ""
      } ${fullWidth ? classes.fullWidth : ""}`}
      {...field}
      {...rest}
      type={type}
      name={name}
      disabled={disabled}
    />
    // </div>
  );
};

export default InputField;
