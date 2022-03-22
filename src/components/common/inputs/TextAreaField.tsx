import { ComponentPropsWithoutRef } from "react";
import { Field } from "react-final-form";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";

interface Props extends ComponentPropsWithoutRef<"textarea"> {
  name: string;
  label?: string;
}

const TextAreaField = ({ name, label, ...rest }: Props) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <FormControl>
          <FormLabel fontSize="lg" fontWeight="bold">
            {label}
          </FormLabel>
          <Textarea {...input} {...rest} size="lg" />
          {meta.error && meta.touched && (
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default TextAreaField;
