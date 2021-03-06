import * as Yup from "yup";

export const allocationFormSchema = Yup.object().shape({
  allocated_to: Yup.array().required("Recepients required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("A message is required"),
});
