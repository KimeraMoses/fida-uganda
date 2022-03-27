import { SimpleGrid, useToast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useEffect } from "react";
import { toastError } from "../../../lib/toastDetails";
import NumberField from "../../common/NumberField";
import TextAreaField from "../../common/TextAreaField";
import {
  leaveTrackerInitialValues,
  leaveTrackerSchema,
} from "./schemas/leaveTracker";

const LeaveTrackerForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={leaveTrackerInitialValues}
      validationSchema={leaveTrackerSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <SimpleGrid as={Form} p={10}>
        <NumberField name="advanceAmount" placeholder="Advance Amount" />
        <TextAreaField name="reason" placeholder="Reason" />
      </SimpleGrid>
    </Formik>
  );
};

export default LeaveTrackerForm;
