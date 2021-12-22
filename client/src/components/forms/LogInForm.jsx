import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EmailInput from "../common/EmailInput";
import useForm from "../../hooks/useForm";
import PasswordInput from "../common/PasswordInput";
import { formStyle } from "../../defaultData/styles/loginSignup";
import { emailIsValid } from "../../defaultData/funcs";
import { dismissAlert, logIn } from "../../store/reducers/auth";
import AlertBanner from "../common/AlertBanner";
import SubmitButton from "./SubmitButton";

function LogInForm() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const isDisabled = !email || !password;

  const handleDismissError = () => {
    dispatch(dismissAlert());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailIsValid(email)) {
      dispatch(logIn(email, password));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Typography variant="h4">Sign In</Typography>
      {error && (
        <AlertBanner
          type="error"
          error={error}
          handleClose={handleDismissError}
        />
      )}
      <EmailInput value={email} handleChange={handleChange} />
      <PasswordInput value={password} handleChange={handleChange} />
      <Link to="/recover-password">Forgot your password?</Link>
      <SubmitButton loading={loading} isDisabled={isDisabled} />
      <Typography
        variant="body1"
        sx={{ alignSelf: "center", marginTop: "2rem" }}
      >
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Typography>
    </form>
  );
}

export default LogInForm;
