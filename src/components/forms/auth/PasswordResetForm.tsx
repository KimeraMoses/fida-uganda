import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Flex, Button, Text } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import {
  passwordResentSchema,
  passwordResentInitialValues,
} from "./schemas/passwordReset";

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
          <Link to="/">Back to Login</Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default PasswordResetForm;
