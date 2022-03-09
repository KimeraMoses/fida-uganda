import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const TextFieldRead = ({ label, value }) => {
  return (
    <FormControl>
      <FormLabel fontWeight="bold">{label}</FormLabel>
      <Input value={value} readOnly />
    </FormControl>
  );
};

export default TextFieldRead;
