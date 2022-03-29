import * as yup from "yup";

export const taskInitialValues = {
  title: "",
  description: "",
  dueDate: "",
  outline: "",
  tag: "",
  team: "",
};

export const tasksSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  dueDate: yup.date().required("Due date is required"),
});
