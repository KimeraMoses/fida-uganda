import * as Yup from "yup";

export const createPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const createPasswordInitialValues = {
  password: "",
  confirm_password: "",
};
