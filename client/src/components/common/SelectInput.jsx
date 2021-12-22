import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";

function SelectInput({ labelText, labelFor, value, setValue, options }) {
  return (
    <FormControl>
      <InputLabel htmlFor={labelFor}>{labelText}</InputLabel>
      <TextField
        select
        name={labelFor}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value="" defaultValue disabled>
          Select an option
        </MenuItem>

        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
}

export default SelectInput;
