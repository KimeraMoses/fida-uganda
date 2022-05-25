import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./LeaveApplicationForm.module.css";
import InputField from "./../../../common/UI/InputField/InputField";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import SelectField from "../../../common/SelectField";
import { monthsLong } from "../../../../assets/text";

const LeaveApplicationForm = (props) => {
  const { onClose, isSubmitting } = props;
  return (
    <div className={classes.leave_appn_form_wrapper}>
      <SimpleGrid
        columns={2}
        spacing={1}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>I wish to apply for:</div>
        <SelectField
          name="type"
          placeholder="Select Type"
          options={[
            { label: "Annual", value: "annual" },
            { label: "Quarterly", value: "quarterly" },
          ]}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={1}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>Month of Application:</div>
        <SelectField
          name="type"
          placeholder="Select Month"
          options={monthsLong}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={2}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <InputField
          name="reason"
          label="From:"
          placeholder="Reason"
          type="date"
        />
        <InputField
          name="reason"
          label="To:"
          placeholder="Reason"
          type="date"
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

      <SimpleGrid columns={1} spacing={1}>
        <InputField
          name="address_on_leave"
          label="While on Leave, my physical contact address will be"
          placeholder="Address on leave"
        />
      </SimpleGrid>
      <SimpleGrid
        columns={1}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <InputField
          name="tel_on_leave"
          label="Telephone on leave"
          maxlength="12"
        />
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
