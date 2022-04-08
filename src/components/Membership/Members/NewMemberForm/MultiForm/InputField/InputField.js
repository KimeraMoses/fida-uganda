import { Field, useField } from "formik";
import React from "react";
import classes from "./InputField.module.css";

const InputField = ({ type, name, disabled, fullwidth, ...rest }) => {
  const [field] = useField(name);

  return (
    <Field
      className={`${classes.input_field_wrapper} ${
        disabled ? classes.input_field__disabled : ""
      } ${fullwidth ? classes.fullwidth : ""}`}
      {...field}
      {...rest}
      type={type}
      name={name}
      disabled={disabled}
    />
  );
};

export default InputField;
