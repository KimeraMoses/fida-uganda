import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Flex, Button, Text } from "@chakra-ui/react";
import { signUpInitialValues, signUpSchema } from "./schemas/signUp";
import { designationOptions, projectOptions } from "../../../lib/options";
import SelectField from "../../common/SelectField";
import TextField from "../../common/TextField";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={signUpInitialValues}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
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
        <Button
          type="submit"
          borderRadius="full"
          bgGradient="linear(to-r, purple.400, purple.700)"
          _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
          size="lg"
          w="100%"
          color="white"
        >
          Sign Up
        </Button>
        <Text as="u" alignSelf="center" color="purple.900">
          <Link to="/login">
            Already have an account? <strong>Sign In</strong>
          </Link>
        </Text>
      </Flex>
    </Formik>
  );
};

export default SignUpForm;
