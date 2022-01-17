import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SubmitButton from "./SubmitButton";
import EmailInput from "../../common/EmailInput";
import useForm from "../../../hooks/useForm";
import GenericAlert from "../../common/GenericAlert";
import { dismissAlert, resetPassword } from "../../../store/reducers/auth";

function PasswordResetForm() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  const { values, handleChange } = useForm({ email: "" });

  const { email } = values;

  const isDisabled = !email;

  const handleAlertClose = () => {
    dispatch(dismissAlert());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
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
      <SubmitButton
        label="Recover Password"
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

export default PasswordResetForm;
