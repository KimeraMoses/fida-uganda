import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./NewActivityForm.module.css";
import { Textarea } from "@chakra-ui/react";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";

const NewActivityForm = props => {
  const { onClose } = props;
  return (
    <div className={classes.activity_form_wrapper}>
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
          <FormButton variant="cancel" type="button" onClick={() => onClose()}>
            cancel
          </FormButton>
          <FormButton variant="save" type="submit">
            Save
          </FormButton>
        </div>
    </div>
  );
};

export default withForm(NewActivityForm);
