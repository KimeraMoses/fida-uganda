import {
  Checkbox as CheckboxBase,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { Field } from "formik";

const Checkbox = ({
  name,
  validate,
  label,
  helperText,
  description,
  ...rest
}) => {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <CheckboxBase
            {...field}
            id={name}
            {...rest}
            defaultChecked={field.value}
          >
            {description}
          </CheckboxBase>
          {form.errors[name] && (
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default Checkbox;
