import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"select"> {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
}

const SelectField = ({ label, name, options, ...rest }: Props) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {label}
      </FormLabel>
      <Field as={Select} {...field} {...rest} size="lg">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectField;
