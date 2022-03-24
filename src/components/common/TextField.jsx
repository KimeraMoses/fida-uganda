import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

const TextField = ({ label, name, ...rest }) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {label}
      </FormLabel>
      <Field as={Input} {...field} {...rest} size="lg" />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
