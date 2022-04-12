import { useEffect } from "react";
import { Formik, Form } from "formik";
import { useToast, Flex } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";
import {
  createPasswordInitialValues,
  createPasswordSchema,
} from "./schemas/createPassword";
import { toastError } from "../../../lib/toastDetails";
import PasswordField from "../../common/PasswordField";

const CreatePasswordForm = ({
  onSubmit,
  isSubmitting,
  isError,
  error,
  token,
}) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={createPasswordInitialValues}
      validationSchema={createPasswordSchema}
      onSubmit={(values) => {
        onSubmit({ ...values, token });
      }}
    >
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <PasswordField name="password" placeholder="Password" />
        <PasswordField name="confirm_password" placeholder="Confirm Password" />
        <SubmitButton isLoading={isSubmitting} label={"Create Password"} />
      </Flex>
    </Formik>
  );
};

export default CreatePasswordForm;
