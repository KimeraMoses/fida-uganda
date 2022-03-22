import { ComponentPropsWithoutRef } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

interface Props extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
}

const TextField = ({ label, name, ...rest }: Props) => {
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
