import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Flex, Text, useToast } from "@chakra-ui/react";
import { toastError } from "../../../lib/toastDetails";
import TextField from "../../common/TextField";
import SubmitButton from "./SubmitButton";
import {
  passwordResentSchema,
  passwordResentInitialValues,
} from "./schemas/passwordReset";

const PasswordResetForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={passwordResentInitialValues}
      validationSchema={passwordResentSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <SubmitButton isLoading={isSubmitting} label="Recover Password" />
        <Text as="u" alignSelf="center" color="purple.900">
          <Link to="/">Back to Login</Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default PasswordResetForm;
