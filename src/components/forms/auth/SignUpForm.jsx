import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Flex, Text, useToast } from "@chakra-ui/react";
import { signUpInitialValues, signUpSchema } from "./schemas/signUp";
import { designationOptions, projectOptions } from "../../../lib/options";
import SelectField from "../../common/SelectField";
import TextField from "../../common/TextField";
import SubmitButton from "./SubmitButton";
import { toastError } from "../../../lib/toastDetails";
import SelectAvatar from "../../common/SelectAvatar";

const SignUpForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const [avatar, setAvatar] = useState(null);
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
        if (!avatar) {
          toast(toastError("Please select an avatar"));
          return;
        }
        const formData = new FormData();
        formData.append("image", avatar);
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        onSubmit(values);
      }}
    >
      <Flex as={Form} flexDir="column" gap={5} py={10}>
        <SelectAvatar
          avatar={avatar}
          setAvatar={setAvatar}
          alignSelf="center"
          borderRadius="full"
          h={20}
          w={20}
          iconObj={{ size: 24 }}
        />
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
