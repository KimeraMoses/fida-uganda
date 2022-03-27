import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Flex, Text, useToast } from "@chakra-ui/react";
import { signUpInitialValues, signUpSchema } from "./schemas/signUp";
import { designationOptions, projectOptions } from "../../../lib/options";
import SelectField from "../../common/SelectField";
import TextField from "../../common/TextField";
import SubmitButton from "./SubmitButton";
import { useEffect } from "react";
import { toastError } from "../../../lib/toastDetails";

const SignUpForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={signUpInitialValues}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <TextField name="name" placeholder="Name" autoComplete="off" />
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <SelectField
          name="designation"
          placeholder="Select Designation"
          options={designationOptions}
        />
        <SelectField
          name="project"
          placeholder="Select Project"
          options={projectOptions}
        />
        <SubmitButton isLoading={isSubmitting} label="Sign Up" />
        <Text as="u" alignSelf="center" color="purple.900">
          <Link to="/">
            Already have an account? <strong>Sign In</strong>
          </Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default SignUpForm;
