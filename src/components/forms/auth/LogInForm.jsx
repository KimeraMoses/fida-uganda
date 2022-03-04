import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import SubmitButton from "./SubmitButton";
import { dismissAlert, logIn } from "../../../store/reducers/auth";
import Alert from "../../common/GenericAlert";
import loginValidation, { initialValues } from "./validations/login";
import TextField from "../../common/TextField";

function LogInForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleAlertClose = () => {
    dispatch(dismissAlert());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidation}
      onSubmit={(values) => {
        dispatch(logIn(values));
      }}
    >
      <Box as={Form} py="2rem" display="flex" flexDir="column" gap="2rem">
        {error && (
          <Alert
            type="error"
            message={error}
            handleAlertClose={handleAlertClose}
          />
        )}
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <TextField
          name="password"
          placeholder="Password"
          autoComplete="off"
          type="password"
        />
        <Text as="u" color="purple.500">
          <Link to="/forgotpassword">Forgot Password</Link>
        </Text>
        <SubmitButton label="Sign In" isLoading={loading} />
        <Text alignSelf="center" as="u" color="purple.900">
          <Link to="/signup">
            Don't have an account? <strong>Sign Up</strong>
          </Link>
        </Text>
      </Box>
    </Formik>
  );
}

export default LogInForm;
