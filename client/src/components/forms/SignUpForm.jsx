import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import EmailInput from "../common/EmailInput";
import SelectInput from "../common/SelectInput";
import useForm from "../../hooks/useForm";
import { designationOptions } from "../../defaultData/data";
import { formStyle } from "../../defaultData/styles/loginSignup";
import { emailIsValid } from "../../defaultData/funcs";
import SubmitButton from "./SubmitButton";
import AlertBanner from "../common/AlertBanner";
import { dismissAlert, signUp } from "../../store/reducers/auth";

function SignUpForm() {
  const { error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [option, setOption] = useState("");
  const [values, handleChange] = useForm({
    email: "",
    firstName: "",
    lastName: "",
  });
  const { email, firstName, lastName } = values;

  const isDisabled = !email || !firstName || !lastName;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailIsValid(email)) {
      dispatch(signUp(email, firstName, lastName, option));
    }
  };

  const handleDismissAlert = () => {
    dispatch(dismissAlert());
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Typography variant="h4" sx={{ color: "purple.500", mb: "2rem" }}>
        Sign Up
      </Typography>
      {error && (
        <AlertBanner
          type="error"
          error={error}
          handleClose={handleDismissAlert}
        />
      )}
      <EmailInput value={email} handleChange={handleChange} />
      <TextField
        label="First Name"
        placeholder="First name"
        value={firstName}
        onChange={handleChange("firstName")}
      />
      <TextField
        label="Last name"
        placeholder="Last name"
        value={lastName}
        onChange={handleChange("lastName")}
      />
      <SelectInput
        labelFor="designation"
        options={designationOptions}
        value={option}
        setValue={setOption}
      />
      <SubmitButton loading={loading} isDisabled={isDisabled} />
      <Typography
        variant="body1"
        sx={{ alignSelf: "center", marginTop: "2rem" }}
      >
        Already have an account? <Link to="/login">Log In</Link>
      </Typography>
    </form>
  );
}

export default SignUpForm;
