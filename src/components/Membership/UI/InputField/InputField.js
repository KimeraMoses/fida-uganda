import { Field, useField } from "formik";
import React from "react";
import { FormErrorMessage } from "@chakra-ui/react";
import classes from "./InputField.module.css";

const InputField = ({ type, name, disabled, fullWidth, ...rest }) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;
  return (
    // <div
    //   className={`${classes.input_field_wrapper} ${
    //     disabled ? classes.input_field__disabled : ""
    //   } ${fullWidth ? classes.fullWidth : ""}`}
    // >
    <>
      <Field
        className={`${classes.input_field_wrapper} ${
          disabled ? classes.input_field__disabled : ""
        } ${fullWidth ? classes.fullWidth : ""} ${
          isInvalid ? classes.invalid_value : ""
        }`}
        {...field}
        {...rest}
        type={type}
        name={name}
        disabled={disabled}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </>
    // </div>
  );
};

export default InputField;
