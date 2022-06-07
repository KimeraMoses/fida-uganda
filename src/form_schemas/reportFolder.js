import * as Yup from "yup";

export const reportFolderInitialValues = {
  name: "",
  project: "",
};

export const reportFolderValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  project: Yup.string().required("Project is required"),
});
