import * as Yup from "yup";

const loginValidation = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

export const initialValues = {
  email: "",
  password: "",
};

export default loginValidation;
