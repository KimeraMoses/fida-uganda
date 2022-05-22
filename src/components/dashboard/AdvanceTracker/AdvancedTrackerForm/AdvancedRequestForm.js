import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "../../LeaveTracker/LeaveApplicationForm/LeaveApplicationForm.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";

const AdvancedRequestForm = ({ isSubmitting, onClose }) => {
  return (
    <div className={classes.leave_appn_form_wrapper}>
      <SimpleGrid columns={2} spacing={4}>
        <InputField name="month" label="Month" placeholder="e.g March" />
        <InputField
          name="net_pay"
          label="Net Salary(UGX)"
          placeholder="000,0000"
          type="number"
        />
      </SimpleGrid>
      <SimpleGrid columns={1} spacing={4}>
        <InputField name="amount" label="Advance Amount: " type="number" />
      </SimpleGrid>
      <SimpleGrid columns={1} spacing={4}>
        <InputField
          name="date"
          label="Date Needed: "
          type="date"
          min={new Date()}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={1}
        spacing={2}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>Reason:</div>
        <Textarea name="reason" placeholder="Reason" />
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
