import { Select } from "@chakra-ui/react";

function SelectInput({ placeholder, options, name, value, handleChange }) {
  return (
    <Select
      placeholder={placeholder}
      size="lg"
      color="gray.600"
      name={name}
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default SelectInput;
