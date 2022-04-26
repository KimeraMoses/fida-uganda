import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import classes from "../../LeaveTracker/LeaveApplicationForm/LeaveApplicationForm.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import { SimpleGrid } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import advanceRequestFormSchema from "./schema";
import { addAdvance } from "../../../../apis/advances";
import { toastSuccess, toastError } from "../../../../lib/toastDetails";

const AdvancedRequestForm = (props) => {
  const [loading, setLoading] = useState(false);
  const { onClose } = props;
  const toast = useToast();
  const handleSubmit = (values) => {
    try {
      setLoading(true);
      addAdvance(values);
      setLoading(false);
      onClose();
      toast(toastSuccess("Advance request sent"));
    } catch (error) {
      setLoading(false);
      toast(toastError("Error: Advance request not submitted"));
    }
  };
  return (
    <div className={classes.leave_appn_form_wrapper}>
      <Formik
        initialValues={{
          date_needed: "",
          amount: "",
          net_pay: "",
          month: "",
          budget_year: "",
          address_on_leave: "",
          tel_on_leave: "",
        }}
        validationSchema={advanceRequestFormSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        <Form>
          <SimpleGrid columns={2} spacing={2}>
            <InputField
              name="date_needed"
              type="date"
              label="Date needed"
              placeholder="Date needed"
            />
            <InputField
              name="address_on_leave"
              label="Address on leave"
              type="text"
            />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={4}>
            <InputField name="budget_year" label="Budget Year" type="number" />
            <InputField name="month" label="Month" placeholder="e.g March" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <InputField
              name="net_pay"
              label="Net Pay(UGX)"
              placeholder="Net Pay"
              type="number"
            />
            <InputField
              name="amount"
              label="Advance Amount(UGX)"
              placeholder="Amount"
              type="number"
            />
          </SimpleGrid>
          <SimpleGrid column={1}>
            <InputField
              name="tel_on_leave"
              label="Telephone on leave"
              type="text"
            />
          </SimpleGrid>

          <div className={classes.form_actions_wrapper}>
            <FormButton variant="cancel" onClick={onClose}>
              Cancel
            </FormButton>
            <FormButton type="submit" variant="outlined">
              {!loading ? "Send" : "Sending"}
            </FormButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AdvancedRequestForm;
