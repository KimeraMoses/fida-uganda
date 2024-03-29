import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./NewActivityForm.module.css";
import Textarea from "../../../common/TextAreaField";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import SelectInput from "../../Allocations/AllocationForm/SelectInput";
import SelectInputField from "../../../common/UI/SelectInputField/SelectInputField";

const NewActivityForm = (props) => {
  const { onClose, membersData, projectOptions, setFieldValue, isSubmitting } =
    props;

  const formattedMembers =
    membersData &&
    membersData.map((user) => ({
      label: `${user.first_name} ${user.last_name}`,
      value: user.id,
    }));

  return (
    <div className={classes.activity_form_wrapper}>
      <div className={classes.input_group_wrapper}>
        <div className={classes.input_label}>Member Name</div>
        <div className={classes.input_field_wrapper}>
          <SelectInput
            fullWidth
            isMulti={true}
            options={formattedMembers}
            name="member"
            // onChange={(option) => setFieldValue("member", option.value)}
            onChange={(option) =>
              setFieldValue(
                "member",
                option.map((item) => item.value)
              )
            }
            disabled={!membersData && !formattedMembers.length}
          />
        </div>
      </div>
      <div className={classes.input_group_wrapper}>
        <div className={classes.input_label}>Project</div>
        <div className={classes.input_field_wrapper}>
          <SelectInputField
            data={projectOptions}
            name="project"
            placeholder="Choose a project"
            setFieldValue={setFieldValue}
          />
        </div>
      </div>
      <div className={classes.input_group_wrapper}>
        <div className={classes.input_label}>Project Activity</div>
        <div className={classes.input_field_wrapper}>
          <InputField
            placeholder="Type project activity here"
            fullWidth
            name="projectActivity"
          />
        </div>
      </div>
      <div className={classes.input_group_wrapper}>
        <div className={classes.input_label}>Date of Activity</div>
        <div className={classes.input_field_wrapper}>
          <InputField
            placeholder="Select date"
            fullWidth
            name="date_of_activity"
            type="date"
          />
        </div>
      </div>
      <div className={classes.input_group_wrapper_last}>
        <div className={classes.input_label}>Activity Description Summary</div>
        <Textarea
          rows={5}
          name="activityDescription"
          placeholder="descript activity"
        />
      </div>
      <div className={classes.form_action_wrapper}>
        <FormButton variant="cancel" type="button" onClick={() => onClose()}>
          cancel
        </FormButton>
        <FormButton variant="save" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving" : "Save"}
        </FormButton>
      </div>
    </div>
  );
};

export default withForm(NewActivityForm);
