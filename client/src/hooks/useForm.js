import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const valueSetter = (key, value) => {
    setValues((preValues) => ({ ...preValues, [key]: value }));
  };

  return [values, handleChange, valueSetter];
};

export default useForm;
