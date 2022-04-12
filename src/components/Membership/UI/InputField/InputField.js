import { Field, useField } from "formik";
import React from "react";
import classes from "./InputField.module.css";

const InputField = ({ fullwidth, name, disabled, ...rest }) => {
  const [field] = useField(name);

  return (
    <Field
      className={`${classes.input_field_wrapper} ${
        disabled ? classes.input_field__disabled : ""
      } ${fullwidth ? classes.fullwidth : ""}`}
      name={name}
      disabled={disabled}
      {...field}
      {...rest}
    />
  );
};

export default InputField;
