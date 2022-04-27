import * as yup from "yup";

export const patientInitialValues = {
  first_name: "",
  last_name: "",
  patient_role: "",
  phone: "",
  email: "",
  district: "",
  village: "",
  sex: "",
  mode_of_communication: "",
  date_of_first_session: "",
  pwd: false,
};

export const patientSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  patient_role: yup.string().required("Patient role is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().required("Email is required"),
  district: yup.string().required("District is required"),
  village: yup.string().required("Village is required"),
  sex: yup.string().required("Sex is required"),
  mode_of_communication: yup.string().required("Mode of communication"),
  data_of_first_session: yup.date().required("Date is required"),
  pwd: yup.boolean().required("PWD is required"),
});
