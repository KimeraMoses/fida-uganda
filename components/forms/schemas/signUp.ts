import * as yup from "yup";
import { IS_REQUIRED } from "../../../assets/constants";

export const signUpSchema = yup.object().shape({
  name: yup.string().required(`Name ${IS_REQUIRED}`),
  email: yup
    .string()
    .required(`Email ${IS_REQUIRED}`)
    .email("Email is not valid"),
  designation: yup.string().required(`Designation ${IS_REQUIRED}`),
  project: yup.string().required(`Project ${IS_REQUIRED}`),
});

export const signUpInitialValues = {
  email: "",
  password: "",
  designation: "",
  project: "",
};
