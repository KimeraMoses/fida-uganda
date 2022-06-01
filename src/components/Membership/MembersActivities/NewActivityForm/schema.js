import * as Yup from "yup";

export const schema = Yup.object().shape({
  member: Yup.array().required("Members required"),
  project: Yup.string().required("A project is required"),
  projectActivity: Yup.string().required("A project activity is required"),
  date_of_activity: Yup.string().required("Date of activity is required"),
  activityDescription: Yup.string().required("Activity description is required")
});
