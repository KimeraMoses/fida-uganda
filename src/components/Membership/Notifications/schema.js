import * as Yup from "yup";

export const notificationSchema = Yup.object().shape({
  user: Yup.array().required("Members required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("A message is required"),
});
