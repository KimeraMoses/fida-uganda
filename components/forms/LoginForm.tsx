import Link from "next/link";
import { Formik, Form } from "formik";
import { Flex, Text, Button, Link as ChakraLink } from "@chakra-ui/react";
import { loginInitialValues, loginSchema } from "./schemas/login";
import TextField from "../TextField";

const LoginForm = () => {

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Flex as={Form} flexDir="column" gap={5}>
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <TextField
          name="password"
          placeholder="Password"
          autoComplete="off"
          type="password"
        />
        <Text>
          <Link href="/forgot-password" passHref>
            <ChakraLink>Forgot password?</ChakraLink>
          </Link>
        </Text>
        <Button>Sign In</Button>
        <Text alignSelf="center">
          <Link href="/signup" passHref>
            <ChakraLink>
              Don&apos;t have an account? <strong>Sign Up</strong>
            </ChakraLink>
          </Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default LoginForm;
