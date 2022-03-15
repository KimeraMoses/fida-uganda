import Link from "next/link";
import { Formik, Form } from "formik";
import { Flex, Button, Text, Link as ChakraLink } from "@chakra-ui/react";
import TextField from "../TextField";
import {
  passwordResentInitialValues,
  passwordResentSchema,
} from "./schemas/passwordResent";

const PasswordResetForm = () => {
  return (
    <Formik
      initialValues={passwordResentInitialValues}
      validationSchema={passwordResentSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Flex as={Form} flexDir="column" gap={5}>
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <Button type="submit">Recover Password</Button>
        <Text alignSelf="center">
          <Link href="/login" passHref>
            <ChakraLink>Back to Login</ChakraLink>
          </Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default PasswordResetForm;
