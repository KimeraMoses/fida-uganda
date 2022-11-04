import React from "react";
import { FormErrorMessage, FormControl, FormLabel } from "@chakra-ui/react";
import classes from "./InputField.module.css";
import { Field, useField } from "formik";

const InputField = ({
  type,
  name,
  disabled,
  label,
  fullWidth,
  className,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;
  return (
    <FormControl isInvalid={isInvalid}>
      {label && (
        <FormLabel fontSize="sm" color="blackAlpha.600">
          {label}
        </FormLabel>
      )}
      <Field
        className={`${classes.input_field_wrapper} ${
          disabled ? classes.input_field__disabled : ""
        } ${fullWidth ? classes.fullwidth : ""} ${
          isInvalid ? classes.invalid_value : ""
        } ${className}`}
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
