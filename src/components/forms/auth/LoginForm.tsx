import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { loginInitialValues, loginSchema } from "./schemas/login";
import TextField from "../../common/TextField";
import { ILoginUser } from "../../../interfaces/User";
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
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <TextField
          name="password"
          placeholder="Password"
          autoComplete="off"
          type="password"
        />
        <Text as="u" color="purple.500">
          <Link to="/forgotpassword">Forgot password?</Link>
        </Text>
        <Button
          type="submit"
          borderRadius="full"
          bgGradient="linear(to-r, purple.400, purple.700)"
          _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
          size="lg"
          w="100%"
          color="white"
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
        <Text as="u" alignSelf="center" color="purple.900">
          <Link to="/signup">
            Don&apos;t have an account? <strong>Sign Up</strong>
          </Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default LoginForm;
