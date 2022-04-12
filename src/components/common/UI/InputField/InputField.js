import React from "react";
import { FormErrorMessage, FormControl } from "@chakra-ui/react";
import classes from "./InputField.module.css";
import { Field, useField } from "formik";

const InputField = ({ type, name, disabled, fullwidth, ...rest }) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;
  return (
    <FormControl isInvalid={isInvalid}>
      <Field
        className={`${classes.input_field_wrapper} ${
          disabled ? classes.input_field__disabled : ""
        } ${fullwidth ? classes.fullwidth : ""} ${
          isInvalid ? classes.invalid_value : ""
        }`}
        {...field}
        {...rest}
        type={type}
        name={name}
        disabled={disabled}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
