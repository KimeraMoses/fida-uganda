import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { emailIsValid } from "../../defaultData/funcs";

function EmailInput({ value, helperText, handleChange }) {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleIsValidEmail = () => {
    setIsValidEmail(emailIsValid(value));
  };

  useEffect(() => {
    handleIsValidEmail();
  });

  return (
    <FormControl>
      <TextField
        error={value.length > 0 && !isValidEmail}
        placeholder="Email"
        label="Email"
        type="email"
        value={value}
        onChange={handleChange("email")}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default EmailInput;
