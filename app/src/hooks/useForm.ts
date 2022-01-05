import { useState } from "react";

export default function useForm(initialState: any) {
  const [values, setValues] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleChange,
  };
}
