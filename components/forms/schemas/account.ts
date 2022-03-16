import * as yup from "yup";
import { IS_REQUIRED } from "../../../assets/constants";

export const accountSchema = yup.object().shape({
  name: yup.string().required(`Name ${IS_REQUIRED}`),
  email: yup
    .string()
    .email("Email is invalid")
    .required(`Email ${IS_REQUIRED}`),
  sex: yup.string().required(`Sex ${IS_REQUIRED}`),
  designation: yup.string().required(`Designation ${IS_REQUIRED}`),
  project: yup.string().required(`Project ${IS_REQUIRED}`),
});

export const accountInitialValues = {
  name: "",
  email: "",
  sex: "",
  designation: "",
  project: "",
  bank: "",
  bankAccount: "",
  nextOfKin: "",
  nextOfKinPhoneNumber: "",
};
