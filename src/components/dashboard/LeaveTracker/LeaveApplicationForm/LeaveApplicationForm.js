import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./LeaveApplicationForm.module.css";
import InputField from "./../../../common/UI/InputField/InputField";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";
// import SelectField from "../../../common/SelectField";
import SelectInput from "../../../Membership/Allocations/AllocationForm/SelectInput";
import { monthsLong } from "../../../../assets/text";

/**
 * 
 * @param {
    "reason":"tired of work",
    "address_on_leave":"kasubi",
    "from":"02/07/2021",
    "to":"01/07/2021",
    "month_of_application":"july",
    "tel_on_leave":"012578552",
    "duration_type":"quartely",
    "details":"string"} props 
 * @returns 
 */

const LeaveApplicationForm = (props) => {
  const { onClose, isSubmitting, setFieldValue } = props;
  return (
    <div className={classes.leave_appn_form_wrapper}>
      <SimpleGrid
        columns={2}
        spacing={1}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>I wish to apply for:</div>
        <SelectInput
          name="duration_type"
          placeholder="Select Duration Type"
          options={[
            { label: "Annual", value: "annual" },
            { label: "Quarterly", value: "quarterly" },
          ]}
          isMulti={false}
          onChange={(option) => setFieldValue("duration_type", option.value)}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={1}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>Month of Application:</div>

        <SelectInput
          name="month_of_application"
          onChange={(option) =>
            setFieldValue("month_of_application", option.value)
          }
          options={monthsLong}
          isMulti={false}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={2}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <InputField name="from" label="From:" placeholder="From" type="date" />
        <InputField name="to" label="To:" placeholder="To" type="date" />
      </SimpleGrid>
      <SimpleGrid
        columns={1}
        spacing={2}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>Reason:</div>
        <Textarea name="reason" placeholder="Reason" />
      </SimpleGrid>

      <SimpleGrid
        columns={1}
        spacing={2}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>Details:</div>
        <Textarea name="details" placeholder="Details" />
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
