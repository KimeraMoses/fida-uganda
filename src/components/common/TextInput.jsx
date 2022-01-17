import { Input, InputGroup } from "@chakra-ui/react";

function TextInput({ placeholder, name, value, handleChange }) {
  return (
    <InputGroup>
      <Input
        size="lg"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        borderColor="gray.300"
      />
    </InputGroup>
  );
}

export default TextInput;
