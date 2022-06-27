import * as yup from "yup";

export const attendanceSchema = yup.object().shape({
  project_name: yup.string().required("Project is required"),
  title: yup.string().required("Title is required"),
  funder: yup.string().required("Funder is required"),
  date: yup.string().required("Date is required"),
  total_participant: yup.string().required("Total Participants is required"),
  age0_17: yup.string(),
  age18_30: yup.string(),
  age31_59: yup.string(),
  above59: yup.string(),
  undisclosed: yup
    .number()
    .min(0)
    .min(0, "Total participant and age group total do not match"),
});

export const attendanceInitialValues = {
  attendees: [],
  title: "",
  project_name: "",
  funder: "",
  date: "",
  age0_17: "",
  age18_30: "",
  age31_59: "",
  above59: "",
  undisclosed: "",
};
