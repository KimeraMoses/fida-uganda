import { ComponentPropsWithoutRef } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

interface Props extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
}

const NumberField = ({ name, label, ...rest }: Props) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {label}
      </FormLabel>
      <NumberInput size="lg">
        <Field as={NumberInputField} {...field} {...rest} size="lg" />
      </NumberInput>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default NumberField;
