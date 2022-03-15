import Link from "next/link";
import { Formik, Form } from "formik";
import { Flex, Button, Text } from "@chakra-ui/react";
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
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <Button
          type="submit"
          borderRadius="full"
          bgGradient="linear(to-r, purple.400, purple.700)"
          _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
          size="lg"
          w="100%"
          color="white"
        >
          Recover Password
        </Button>
        <Text as="u" alignSelf="center" color="purple.900">
          <Link href="/login" passHref>
            <a>Back to Login</a>
          </Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default PasswordResetForm;
