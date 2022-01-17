import { useState } from "react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

function PasswordInput({ value, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<LockIcon color="purple.600" />}
      />
      <Input
        name="password"
        borderColor="gray.300"
        size="lg"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={handleChange}
      />
      <InputRightElement>
        <IconButton
          bg="transparent !important"
          variant="ghost"
          icon={
            showPassword ? (
              <ViewOffIcon color="purple.600" />
            ) : (
              <ViewIcon color="purple.600" />
            )
          }
          onClick={() => setShowPassword(!showPassword)}
        />
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
