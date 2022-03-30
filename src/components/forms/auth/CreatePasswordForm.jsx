import { useEffect } from "react";
import { Formik, Form } from "formik";
import { useToast, Flex } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";
import {
  createPasswordInitialValues,
  createPasswordSchema,
} from "./schemas/createPassword";
import { toastError } from "../../../lib/toastDetails";
import TextField from "../../common/TextField";

const CreatePasswordForm = ({ onSubmit, isSubmitting, isError, error }) => {
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
        onSubmit(values);
      }}
    >
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <TextField
          name="password"
          placeholder="Create Password"
          type="password"
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm Password"
          type="password"
        />
        <SubmitButton isLoading={isSubmitting} label={"Create Password"} />
      </Flex>
    </Formik>
  );
};

export default CreatePasswordForm;
