import { Form, Formik } from "formik";
import React from "react";
import classes from "./LeaveApplicationForm.module.css";
import InputField from "./../../../common/UI/InputField/InputField";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import SelectField from "../../../common/SelectField";
import FormButton from "../../../common/UI/FormButton/FormButton";

const options = [{ label: "Annual" }, { label: "Quarterly" }];

const LeaveApplicationForm = (props) => {
  const { onClose } = props;
  return (
    <div className={classes.leave_appn_form_wrapper}>
      <Formik
        initialValues={{
          name: "",
          designation: "",
          department: "",
          appointmentDate: "",
          leaveType: "",
          reason: "",
          address: "",
          tel: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <SimpleGrid columns={3} spacing={2}>
            <InputField name="name" label="Name" placeholder="Username" />
            <InputField
              name="name"
              label="Designation"
              placeholder="Legal Officer"
            />
            <InputField
              name="depart"
              label="Department"
              placeholder="Legal Aid"
            />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={4}>
            <InputField
              name="appointDate"
              label="Date of Appointment"
              type="date"
            />
            <SelectField
              name="month"
              label="I wish to apply for:"
              placeholder="Annual"
              options={options}
            />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={4}>
            <InputField name="fromDate" label="From:" type="date" />
            <InputField name="toDate" label="To:" type="date" />
          </SimpleGrid>
          <div className={classes.form_field_wrapper}>
            <h4>Reason:</h4>
            <Textarea
              placeholder="Type here"
              name="reason"
              className={classes.textarea_field}
            />
          </div>
          <div className={classes.form_field_wrapper}>
            <InputField
              name="address"
              label="While on Leave, my physical contact address will be:"
            />
          </div>
          <SimpleGrid columns={2} spacing={4}>
            <InputField name="tel" label="Tell" type="tel" />
            <InputField name="appDate" label="Application Date" type="date" />
          </SimpleGrid>

          <div className={classes.form_actions_wrapper}>
            <FormButton variant="cancel" onClick={onClose}>
              Cancel
            </FormButton>
            <FormButton variant="outlined">Send</FormButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LeaveApplicationForm;
