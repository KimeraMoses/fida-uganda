import * as yup from "yup";

export const attendanceSchema = yup.object().shape({
  project_name: yup.string().required("Project is required"),
  title: yup.string().required("Title is required"),
  funder: yup.string().required("Funder is required"),
  date: yup.string().required("Date is required"),
  total_participant: yup.string().required("Total Participants is required"),
  age0_17: yup.string().required("This field is required"),
  age18_30: yup.string().required("This field is required"),
  age31_59: yup.string().required("This field is required"),
  above59: yup.string().required("This field is required"),
  undisclosed: yup.string().required("This field is required"),
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
