import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

const TextAreaField = ({ label, name, ...rest }) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {label}
      </FormLabel>
      <Field as={Textarea} {...field} {...rest} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextAreaField;
