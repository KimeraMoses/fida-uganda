import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import SubmitButton from "./SubmitButton";
import Alert from "../../common/GenericAlert";
import { dismissAlert, resetPassword } from "../../../store/reducers/auth";
import TextField from "../../common/TextField";
import resetPasswordValidation, {
  initialValues,
} from "./validations/resetPassword";

function PasswordResetForm() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  const handleAlertClose = () => {
    dispatch(dismissAlert());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={resetPasswordValidation}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        dispatch(resetPassword(values.email));
      }}
    >
      <Box py="2rem" display="flex" flexDir="column" gap="2rem" as={Form}>
        {error && (
          <Alert
            type="error"
            message={error}
            handleAlertClose={handleAlertClose}
          />
        )}
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <SubmitButton label="Recover Password" isLoading={loading} />
        <Text alignSelf="center" as="u" color="purple.900">
          <Link to="/signup">
            Don't have an account? <strong>Sign Up</strong>
          </Link>
        </Text>
      </Box>
    </Formik>
  );
}

export default PasswordResetForm;
