import Link from "next/link";
import { Formik, Form } from "formik";
import { Flex, Text, Button } from "@chakra-ui/react";
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
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <TextField
          name="password"
          placeholder="Password"
          autoComplete="off"
          type="password"
        />
        <Text as="u" color="purple.500" >
          <Link href="/forgot-password" passHref>
            <a>Forgot password?</a>
          </Link>
        </Text>
        <Button
          type="submit"
          borderRadius="full"
          bgGradient="linear(to-r, purple.400, purple.700)"
          _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
          size="lg"
          w="100%"
          color="white"
        >
          Sign In
        </Button>
        <Text as="u" alignSelf="center" color="purple.900">
          <Link href="/signup" passHref>
            <a>
              Don&apos;t have an account? <strong>Sign Up</strong>
            </a>
          </Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default LoginForm;
