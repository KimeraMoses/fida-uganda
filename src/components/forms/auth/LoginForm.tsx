import { Link } from "react-router-dom";
import { Form } from "react-final-form";
import { Flex, Text } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";
import { ILoginUser } from "../../../interfaces/User";
import TextField from "../../common/inputs/TextAreaField";

type Props = {
  onSubmit: (values: ILoginUser) => void;
};

const LoginForm = ({ onSubmit }: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <Flex flexDir="column" gap={10} onSubmit={handleSubmit}>
          <TextField name="email" />
          <TextField name="password" />
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
      )}
    />
  );
};

export default LoginForm;
