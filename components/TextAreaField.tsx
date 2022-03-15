import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"textarea"> {
  name: string;
  label?: string;
}

const TextAreaField = ({ label, name, ...rest }: Props) => {
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
