import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { HiEye, HiEyeOff } from "react-icons/hi";

const PasswordField = ({ name, label, ...rest }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [field, meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {label}
      </FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onToggle}
          />
        </InputRightElement>
        <Field
          as={Input}
          {...field}
          {...rest}
          size="lg"
          autoComplete="off"
          type={isOpen ? "text" : "password"}
        />
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordField;
