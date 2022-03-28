import React from "react";
// import { Form, Formik, Field } from "formik";
// import * as Yup from "yup";
import classes from "./NewActivityForm.module.css";
import InputField from "./InputField";
import { Textarea } from "@chakra-ui/react";
import FormButton from "./Button/FormButton";

// const initialValues = {
//   member_name: "",
//   member_id: "",
//   project: "",
//   project_activity: "",
//   activity_date: "",
//   activity_summary: "",
// };

// const ActivitySchema = Yup.object().shape({
//   member_name: Yup.string().required("Name is required."),
//   member_id: Yup.string().required("Membership Id is required"),
//   project: Yup.string().required("Project is required"),
//   project_activity: Yup.string().required("Project Activity is required"),
//   activity_date: Yup.string().required("Activity Date is required"),
//   activity_summary: Yup.string().required("Summary is required"),
// });

const NewActivityForm = (props) => {
    const {onClose } = props;
  return (
    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={ActivitySchema}
    //   //   onSubmit={(values) => {
    //   //     onSubmit(values);
    //   //   }}
    // >
    <div className={classes.activity_form_wrapper}>
      <form>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Member Name</div>
          <div className={classes.input_field_wrapper}>
            <InputField placeholder="Type here" fullWidth name="member_name" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Membership ID</div>
          <div className={classes.input_field_wrapper}>
            <InputField placeholder="Type here" fullWidth name="member_name" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Project</div>
          <div className={classes.input_field_wrapper}>
            <InputField placeholder="Type here" fullWidth name="member_name" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Project Activity</div>
          <div className={classes.input_field_wrapper}>
            <InputField placeholder="Type here" fullWidth name="member_name" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Date of Activity</div>
          <div className={classes.input_field_wrapper}>
            <InputField
              placeholder="Type here"
              fullWidth
              name="member_name"
              type="date"
            />
          </div>
        </div>
        <div className={classes.input_group_wrapper_last}>
          <div className={classes.input_label}>
            Activity Description Summary
          </div>
          <div className={classes.input_field_wrapper_last}>
            <Textarea placeholder="Type here" rows={5} />
          </div>
        </div>
        <div className={classes.form_action_wrapper}>
          <FormButton variant="cancel" type="button" onClick={()=>onClose()}>
            cancel
          </FormButton>
          <FormButton variant="save" type="submit">
            Save
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default NewActivityForm;
