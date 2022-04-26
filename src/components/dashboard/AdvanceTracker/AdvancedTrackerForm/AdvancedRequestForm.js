import { Form, Formik } from "formik";
import React from "react";
import classes from "../../LeaveTracker/LeaveApplicationForm/LeaveApplicationForm.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";

const AdvancedRequestForm = (props) => {
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
              name="designation"
              label="Designation"
              placeholder="Legal Officer"
            />
            <InputField
              name="department"
              label="Department"
              placeholder="Legal Aid"
            />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={4}>
            <InputField name="budgetYear" label="Budget Year" type="number" />
            <InputField name="month" label="Month" placeholder="March" />
          </SimpleGrid>
          <div className={classes.form_field_wrapper}>
            <InputField name="amount" label="Advanced Amount(UGX)" />
          </div>
          <SimpleGrid columns={2} spacing={4}>
            <InputField name="fromDate" label="Date requested" type="date" />
            <InputField name="toDate" label="Date needed" type="date" />
          </SimpleGrid>
          <div className={classes.form_field_wrapper}>
            <h4>Reason:</h4>
            <Textarea
              placeholder="Type here"
              name="reason"
              className={classes.textarea_field}
            />
          </div>

          <div className={classes.form_actions_wrapper}>
            <FormButton variant="cancel" onClick={onClose}>
              Cancel
            </FormButton>
            <FormButton variant="outlined" type="submit">
              Send
            </FormButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AdvancedRequestForm;
