import * as Yup from "yup";

const settingsValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  sex: Yup.string().required("Sex is required"),
  designation: Yup.string().required("Designation is required"),
  project: Yup.string().required("Project is required"),
  mobile: Yup.string().required("Phone Number is required"),
  tin: Yup.string().required("TIN is required"),
  bank: Yup.string().required("Bank is required"),
  bankBranch: Yup.string().required("Bank Branch is required"),
  bankAccount: Yup.string().required("Bank Account is required"),
  nssf: Yup.string().required("NSSF is required"),
  nextOfKin: Yup.string().required("Next Of Kin is required"),
  nextOfKinMobile: Yup.string().required(
    "Next Of Kin Phone Number is required"
  ),
});

export const initialValues = {
  name: "",
  email: "",
  sex: "",
  designation: "",
  project: "",
  mobile: "",
  tin: "",
  bank: "",
  bankBranch: "",
  bankAccount: "",
  nssf: "",
  nextOfKin: "",
  nextOfKinMobile: "",
};

export default settingsValidation;
