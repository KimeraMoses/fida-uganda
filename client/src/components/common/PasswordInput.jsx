import { useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function PasswordInput({ value, helperText, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl>
      <TextField
        placeholder="Password"
        label="Password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default PasswordInput;
