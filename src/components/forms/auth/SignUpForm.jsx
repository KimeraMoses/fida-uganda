import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import EmailInput from "../../common/EmailInput";
import PasswordInput from "../../common/PasswordInput";
import TextInput from "../../common/TextInput";
import SelectInput from "../../common/SelectInput";
import useForm from "../../../hooks/useForm";
import {
  designationOptions,
  roleOptions,
} from "../../../defaultData/menu/options";
import GenericAlert from "../../common/GenericAlert";
import { dismissAlert, signUp } from "../../../store/reducers/auth";

function SignUpForm() {
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector((state) => state.auth);

  const { values, handleChange } = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    designation: "",
    role: "",
  });
  const { email, password, firstName, lastName, designation, role } = values;
  const isDisabled =
    !email || !password || !firstName || !lastName || !designation || !role;

  const handleAlertClose = () => {
    dispatch(dismissAlert());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(email, password, firstName, lastName, role, designation));
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
      {success && (
        <GenericAlert
          type="success"
          message={success}
          handleAlertClose={handleAlertClose}
        />
      )}
      <EmailInput value={email} handleChange={handleChange} />
      <PasswordInput value={password} handleChange={handleChange} />
      <TextInput
        placeholder="First Name"
        name="firstName"
        value={firstName}
        handleChange={handleChange}
      />
      <TextInput
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        handleChange={handleChange}
      />
      <SelectInput
        placeholder="Select a role"
        name="role"
        options={roleOptions}
        value={role}
        handleChange={handleChange}
      />
      {role && (
        <SelectInput
          placeholder="Select a designation"
          name="designation"
          options={designationOptions}
          value={designation}
          handleChange={handleChange}
        />
      )}
      <SubmitButton
        label="Sign Up"
        isLoading={loading}
        isDisabled={isDisabled}
      />
      <Text alignSelf="center" as="u" color="purple.900">
        <Link to="/">
          Already have an account? <strong>Sign In</strong>
        </Link>
      </Text>
    </Box>
  );
}

export default SignUpForm;
