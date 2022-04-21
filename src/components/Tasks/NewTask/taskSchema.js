import * as yup from "yup";

export const taskInitialValues = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
  tags: [],
  attachments: [],
  status: "todo",
  team: [],
  outline: [],
};

export const taskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  startDate: yup.string().required("Start date is required"),
  endDate: yup.string().required("End Date is required"),
});
