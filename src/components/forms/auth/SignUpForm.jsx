import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import {
  designationOptions,
  roleOptions,
} from "../../../defaultData/menu/options";
import Alert from "../../common/GenericAlert";
import { dismissAlert, signUp } from "../../../store/reducers/auth";
import { Formik, Form } from "formik";
import TextField from "../../common/TextField";
import SelectField from "../../common/SelectField";
import signUpValidation, {
  initialValues,
  validateFormInput,
} from "./validations/singup";
import AvatarUpload from "../../common/AvatarUpload";

function SignUpForm() {
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector((state) => state.auth);

  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const handleAlertClose = () => {
    dispatch(dismissAlert());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpValidation}
      onSubmit={(values) => {
        if (!image) {
          return;
        }
        const formData = validateFormInput(file, values);
        dispatch(signUp(formData));
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
        {success && (
          <Alert
            type="success"
            message={success}
            handleAlertClose={handleAlertClose}
          />
        )}
        <AvatarUpload
          file={file}
          image={image}
          setFile={setFile}
          setImage={setImage}
        />
        <TextField name="name" placeholder="Full name" autoComplete="off" />
        <TextField name="email" placeholder="Email" autoComplete="off" />
        <SelectField
          name="designation"
          placeholder="Select Designation"
          options={designationOptions}
        />
        <SelectField
          name="project"
          placeholder="Select Project"
          options={roleOptions}
        />
        <SubmitButton label="Sign Up" isLoading={loading} />
        <Text alignSelf="center" as="u" color="purple.900">
          <Link to="/">
            Already have an account? <strong>Sign In</strong>
          </Link>
        </Text>
      </Box>
    </Formik>
  );
}

export default SignUpForm;
