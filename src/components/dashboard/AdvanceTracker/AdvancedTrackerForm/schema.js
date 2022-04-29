import * as Yup from "yup";

export const initialValues = {
  date_needed: "",
  amount: "",
  net_pay: "",
  month: "",
  budget_year: "",
  address_on_leave: "",
  tel_on_leave: "",
};

export const advanceRequestFormSchema = Yup.object().shape({
  date_needed: Yup.date().required("Date needed is a required field"),
  amount: Yup.number().required("Advance amount is a required field"),
  net_pay: Yup.number().required("Net pay is a required field"),
  month: Yup.string().required("Month is a required field"),
  budget_year: Yup.string().required("Budget year is a required field"),
  address_on_leave: Yup.string().required(
    "Address on leave is a required field"
  ),
  tel_on_leave: Yup.string().required("Telphone on leave is a required field"),
});

