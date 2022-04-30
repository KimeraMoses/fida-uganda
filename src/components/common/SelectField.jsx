import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select as SelectBase,
} from "@chakra-ui/react";
import { Field } from "formik";

const SelectField = ({ label, name, options, ...rest }) => {
  return (
    <Field name={name} style={{ width: "100%" }}>
      {({ field, form }) => (
        <FormControl>
          <FormLabel htmlFor="country">{label}</FormLabel>
          <SelectBase id="country" {...field} {...rest}>
            <Field>
              {({ field }) =>
                options.map((option) => (
                  <option
                    key={option.value}
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                    style={{ textOverflow: "ellipsis", maxWidth: "100%" }}
                  >
                    {option.label}
                  </option>
                ))
              }
            </Field>
          </SelectBase>
          {form.errors[name] && (
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default SelectField;
