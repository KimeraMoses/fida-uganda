import * as yup from "yup";
import { IS_REQUIRED } from "../../../assets/constants";

export const passwordResentSchema = yup.object().shape({
  email: yup
    .string()
    .required(`Email ${IS_REQUIRED}`)
    .email("Email is not valid"),
});

export const passwordResentInitialValues = {
  email: "",
};
