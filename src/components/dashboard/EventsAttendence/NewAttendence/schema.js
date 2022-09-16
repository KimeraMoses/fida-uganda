import * as yup from "yup";

export const attendanceSchema = yup.object().shape({
  // project: yup.string().required("Project is required"),
  title: yup.string().required("Title is required"),
  funder: yup.string().required("Funder is required"),
  date: yup.string().required("Date is required"),
  num_male: yup.number().required("The number of male participants is required"),
  num_female: yup.number().required("The number of female participants is required"),
  total_num_participants: yup.number().required("Total Participants is required")

  // age0_17: yup.string(),
  // age18_30: yup.string(),
  // age31_59: yup.string(),
  // above59: yup.string(),
  // undisclosed: yup
  //   .number()
  //   .min(0)
  //   .min(0, "Total participant and age group total do not match"),
});

export const attendanceInitialValues = {
  attendees: [],
  createdAt:"",
  updatedAt:"",
  title: "",
  project: "",
  total_num_participants:"",
  num_male:"",
  num_female:"",
  age_summary:[],
  registeredBy:"",
  funder: "",
  date: "",
};
