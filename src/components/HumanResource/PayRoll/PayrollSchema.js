import * as yup from "yup";

export const payrollNotesInitialValues = {
  title: "",
  month: "",
  year: "",
  status: "unread",
};

export const payrollNotesSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  month: yup.string().required("Month is required"),
  year: yup.string().required("Year is required"),
});
