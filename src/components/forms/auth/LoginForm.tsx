import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-final-form";
import { Flex, Text, useToast } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";
import { ILoginUser } from "../../../interfaces/User";
import TextField from "../../common/inputs/TextField";
import { toastError } from "../../../lib/toastDetails";

type Props = {
  onSubmit: (values: ILoginUser) => void;
  isSubmitting: boolean;
  isError: boolean;
  error: unknown;
};

const LoginForm = ({ onSubmit, isSubmitting, isError, error }: Props) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Flex as="form" flexDir="column" gap={10} onSubmit={handleSubmit}>
          <TextField name="email" placeholder="Email" autoComplete="off" />
          <TextField
            name="password"
            placeholder="Password"
            autoComplete="off"
            type="password"
          />
          <Text as="u" color="purple.500">
            <Link to="/forgotpassword">Forgot Password</Link>
          </Text>
          <SubmitButton label="Sign In" isLoading={isSubmitting} />
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
