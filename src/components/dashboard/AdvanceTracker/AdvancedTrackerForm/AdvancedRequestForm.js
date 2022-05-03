import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "../../LeaveTracker/LeaveApplicationForm/LeaveApplicationForm.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import { SimpleGrid } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";

const AdvancedRequestForm = ({ isSubmitting, onClose }) => {
  return (
    <div className={classes.leave_appn_form_wrapper}>
      <SimpleGrid columns={2} spacing={2}>
        <InputField
          name="date_needed"
          type="date"
          label="Date needed"
          placeholder="Date needed"
          min={new Date()}
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
          type="number"
          maxlength="12"
        />
      </SimpleGrid>

      <div className={classes.form_actions_wrapper}>
        <FormButton variant="cancel" onClick={onClose}>
          Cancel
        </FormButton>
        <FormButton type="submit" variant="outlined" disabled={isSubmitting}>
          {!isSubmitting ? "Send" : "Sending..."}
        </FormButton>
      </div>
    </div>
  );
};

export default withForm(AdvancedRequestForm);
