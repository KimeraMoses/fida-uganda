import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Field, useField } from "formik";
import { Fragment } from "react";

export const TextError = ({ children }) => {
  return <div>{children}</div>;
};

const RadioSelect = ({ label, name, options, ...rest }) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {label}
      </FormLabel>
      <Field name={name} {...field} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.value}>
                <input
                  {...field}
                  type="radio"
                  id={option.value}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label
                  htmlFor={option.value}
                  style={{ marginLeft: 4, marginRight: 4 }}
                >
                  {option.label}
                </label>
              </Fragment>
            );
          });
        }}
      </Field>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default RadioSelect;
