import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./LeaveApplicationForm.module.css";
import InputField from "./../../../common/UI/InputField/InputField";
import { SimpleGrid } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import SelectInput from "../../../Membership/Allocations/AllocationForm/SelectInput";
import TextAreaField from "../../../common/TextAreaField";
import { monthsLong } from "../../../../assets/text";
import formatDate from "../../../../lib/formatDate"

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
          onChange={(option) => setFieldValue("duration_type", option)}
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
            setFieldValue("month_of_application", option)
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
        <InputField name="from" label="From:" placeholder="From" type="date" min={formatDate(new Date())} />
        <InputField name="to" label="To:" placeholder="To" type="date" min={formatDate(new Date())} />
      </SimpleGrid>
      <SimpleGrid
        columns={1}
        spacing={2}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>Reason:</div>
        <TextAreaField name="reason" placeholder="Reason" />
      </SimpleGrid>

      <SimpleGrid
        columns={1}
        spacing={2}
        style={{ alignItems: "center", marginBottom: "5px" }}
      >
        <div className={classes.field_row_label}>Details:</div>
        <TextAreaField name="details" placeholder="Details" />
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


// reason: Yup.string().required("A reason is required"),
//   address_on_leave: Yup.string().required("An address on leave is required"),
//   from: Yup.string().required("Start date is required"),
//   to: Yup.string().required("End date is required"),
//   month_of_application: Yup.string().required(
//     "Month of application is required"
//   ),
//   tel_on_leave: Yup.string().required("Telephone on leave is required"),
//   duration_type: Yup.string().required("Duration type is required"),
//   details: Yup.string().required("Details required"),