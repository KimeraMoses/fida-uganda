import * as Yup from "yup";

export const schema = Yup.object().shape({
  reason: Yup.string().required("A reason is required"),
  address_on_leave: Yup.string().required("An address on leave is required"),
  from: Yup.string().required("Start date is required"),
  to: Yup.string().required("End date is required"),
  month_of_application: Yup.string().required(
    "Month of application is required"
  ),
  tel_on_leave: Yup.string().required("Telephone on leave is required"),
  duration_type: Yup.string().required("Duration type is required"),
  details: Yup.string().required("Details required"),
});
