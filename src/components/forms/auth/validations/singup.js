import * as Yup from "yup";

const signUpValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  designation: Yup.string().required("Designation is required"),
  project: Yup.string().required("Project is required"),
});

export const initialValues = {
  name: "",
  email: "",
  designation: "",
  project: "",
};

export const validateFormInput = (image, values) => {
  let formData = new FormData();
  formData.append("image", image);
  Object.keys(values).forEach((key) => {
    formData.append(key, values[key]);
  });
  return formData;
};
export default signUpValidation;
