import { Link } from "react-router-dom";
import { Flex, Input, Text } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  return (
    <Flex flexDir="column" gap={10}>
      <Input name="email" placeholder="Email" autoComplete="off" />
      <Input
        name="password"
        placeholder="Password"
        autoComplete="off"
        type="password"
      />
      <SubmitButton label="Sign Up" />
      <Text alignSelf="center" as="u" color="purple.900">
        <Link to="/">
          Already have an account? <strong>Sign In</strong>
        </Link>
      </Text>
    </Flex>
  );
};

export default SignUpForm;
