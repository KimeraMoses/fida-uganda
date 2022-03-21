import { Link } from "react-router-dom";
import { Flex, Input, Text } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";

const PasswordResetForm = () => {
  return (
    <Flex flexDir="column" gap={10}>
      <Input name="email" placeholder="Email" autoComplete="off" />
      <SubmitButton label="Recover Password" />
      <Text alignSelf="center" as="u" color="purple.900">
        <Link to="/">
          Back to <strong>Sign In</strong>
        </Link>
      </Text>
    </Flex>
  );
};

export default PasswordResetForm;
