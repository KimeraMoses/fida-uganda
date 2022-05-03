import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./LeaveApplicationForm.module.css";
import InputField from "./../../../common/UI/InputField/InputField";
import { SimpleGrid } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";

const LeaveApplicationForm = (props) => {
  const { onClose, isSubmitting } = props;
  return (
    <div className={classes.leave_appn_form_wrapper}>
      <SimpleGrid columns={2} spacing={2}>
        <InputField name="reason" label="Reason" placeholder="Reason" />
        <InputField
          name="address_on_leave"
          label="Address on leave"
          placeholder="Address on leave"
        />
      </SimpleGrid>
      <SimpleGrid columns={1}>
        <InputField name="tel_on_leave" label="Telephone on leave" />
      </SimpleGrid>
      <div className={classes.form_actions_wrapper}>
        <FormButton variant="cancel" onClick={onClose}>
          Cancel
        </FormButton>
        <FormButton variant="outlined" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending" : "Send"}
        </FormButton>
      </div>
    </div>
  );
};

export default withForm(LeaveApplicationForm);
