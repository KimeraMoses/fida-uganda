import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import SubmitButton from "./SubmitButton";
import EmailInput from "../../common/EmailInput";
import PasswordInput from "../../common/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { dismissAlert, logIn } from "../../../store/reducers/auth";
import GenericAlert from "../../common/GenericAlert";

function LogInForm() {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const { email, password } = values;

  const isDisabled = !email || !password;

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(values));
  };

  const handleAlertClose = () => {
    dispatch(dismissAlert());
  };

  return (
    <Box
      as="form"
      py="2rem"
      display="flex"
      flexDir="column"
      gap="2rem"
      onSubmit={handleSubmit}
    >
      {error && (
        <GenericAlert
          type="error"
          message={error}
          handleAlertClose={handleAlertClose}
        />
      )}
      <EmailInput value={email} handleChange={handleChange} />
      <PasswordInput value={password} handleChange={handleChange} />
      <Text as="u" color="purple.500">
        <Link to="/forgotpassword">Forgot Password</Link>
      </Text>
      <SubmitButton
        label="Sign In"
        isLoading={loading}
        isDisabled={isDisabled}
      />
      <Text alignSelf="center" as="u" color="purple.900">
        <Link to="/signup">
          Don't have an account? <strong>Sign Up</strong>
        </Link>
      </Text>
    </Box>
  );
}

export default LogInForm;
