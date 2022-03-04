import * as Yup from "yup";

const resetPasswordValidation = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

export const initialValues = {
  email: "",
};

export default resetPasswordValidation;
