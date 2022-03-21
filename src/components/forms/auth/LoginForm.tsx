import { Link } from "react-router-dom";
import { Flex, Input, Text } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  return (
    <Flex flexDir="column" gap={10}>
      <Input name="email" placeholder="Email" autoComplete="off" />
      <Input
        name="password"
        placeholder="Password"
        autoComplete="off"
        type="password"
      />
      <Text as="u" color="purple.500">
        <Link to="/forgotpassword">Forgot Password</Link>
      </Text>
      <SubmitButton label="Sign In" />
      <Text alignSelf="center" as="u" color="purple.900">
        <Link to="/signup">
          Don't have an account? <strong>Sign Up</strong>
        </Link>
      </Text>
    </Flex>
  );
};

export default LoginForm;
