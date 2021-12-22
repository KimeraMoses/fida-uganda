import { useDispatch, useSelector } from "react-redux";
import EmailInput from "../common/EmailInput";
import useForm from "../../hooks/useForm";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { formStyle } from "../../defaultData/styles/loginSignup";
import { emailIsValid } from "../../defaultData/funcs";
import { dismissAlert, resetPassword } from "../../store/reducers/auth";
import AlertBanner from "../common/AlertBanner";
import SubmitButton from "./SubmitButton";

function RecoverPasswordForm() {
  const { success, error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [{ email }, handleChange, valueSetter] = useForm({ email: "" });

  const isDisabled = !email;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailIsValid(email)) {
      dispatch(resetPassword(email));
      valueSetter("email", "");
    }
  };

  const handleDismissAlert = () => {
    dispatch(dismissAlert());
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Box>
        <Typography variant="h4">Recover Password</Typography>
        <Typography variant="body1">
          A link will be sent to your email
        </Typography>
      </Box>
      {error && (
        <AlertBanner
          type="error"
          error={error}
          handleClose={handleDismissAlert}
        />
      )}
      {success && (
        <AlertBanner
          type="success"
          error={success}
          handleClose={handleDismissAlert}
        />
      )}
      <EmailInput value={email} handleChange={handleChange} />
      <SubmitButton loading={loading} isDisabled={isDisabled} />

      <Typography
        variant="body1"
        sx={{ alignSelf: "center", marginTop: "2rem" }}
      >
        <Link to="/login">Log In</Link>
      </Typography>
    </form>
  );
}

export default RecoverPasswordForm;
