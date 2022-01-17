import { EmailIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function EmailInput({ value, handleChange }) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<EmailIcon color="purple.600" />}
      />
      <Input
        name="email"
        size="lg"
        type="email"
        placeholder="Email"
        value={value}
        onChange={handleChange}
        borderColor="gray.300"
      />
    </InputGroup>
  );
}

export default EmailInput;
