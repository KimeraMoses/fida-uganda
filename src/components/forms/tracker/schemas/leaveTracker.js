import * as yup from "yup";

export const leaveTrackerSchema = yup.object().shape({
  advanceAmount: yup.number().required("Advance amount is required"),
});

export const leaveTrackerInitialValues = {
  advanceAmount: "",
  reason: "",
};
