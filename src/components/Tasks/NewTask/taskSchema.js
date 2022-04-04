import * as yup from "yup";

export const taskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  endDate: yup.string().required("End Date is required"),
});
