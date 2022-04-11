import { Field, ErrorMessage } from "formik";
import { Fragment } from "react";
import TextError from "./TextError";

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Radio;
