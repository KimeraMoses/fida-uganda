import * as yup from "yup";
import { IS_REQUIRED } from "../../../assets/constants";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(`Email ${IS_REQUIRED}`)
    .email("Email is not valid"),
  password: yup.string().required(`Password ${IS_REQUIRED}`),
});

export const loginInitialValues = {
  email: "",
  password: "",
};
