import React from "react";
import classes from "../../../Membership/MembersActivities/NewActivityForm/NewActivityForm.module.css";
import InputField from "../../../Membership/MembersActivities/NewActivityForm/InputField";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";

const NewReportForm = (props) => {
  const { onClose } = props;
  return (
    <div className={classes.activity_form_wrapper} style={{padding: '10px 20px'}}>
      <form>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Report Title</div>
          <div className={classes.input_field_wrapper}>
            <InputField placeholder="Type here" fullWidth name="" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Supervisor’s Name</div>
          <div className={classes.input_field_wrapper}>
            <InputField placeholder="Type here" fullWidth name="" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Reporting Period</div>
          <div className={classes.input_field_wrapper}>
            <InputField placeholder="Type here" fullWidth name="" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>Date</div>
          <div className={classes.input_field_wrapper}>
            <InputField type="date" placeholder="Type here" fullWidth name="" />
          </div>
        </div>
        <div className={classes.input_group_wrapper}>
          <div className={classes.input_label}>
            <FormButton variant="colored">Upload File</FormButton>
          </div>
          <div className={classes.input_field_wrapper}>
            <InputField
              placeholder="Click to browse or drag and drop your files"
              disabled={true}
              fullWidth
              name=""
              type="file"
            />
          </div>
        </div>

        <div className={classes.form_action_wrapper}>
          <FormButton variant="cancel" type="button" onClick={() => onClose()}>
            cancel
          </FormButton>
          <FormButton variant="save" type="submit">
            Save and Exit
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default NewReportForm;
