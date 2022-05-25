import React from "react";
import classes from "./AddNewFolder.module.css";
import InputField from "./../../../common/UI/InputField/InputField";
import withForm from "./../../../../hoc/withForm";
import SelectInput from "./../../../Membership/Allocations/AllocationForm/SelectInput";
import { useProjectOptions } from "../../../../hooks/useProjects";
import FormButton from "../../../common/UI/FormButton/FormButton";

const NewFolderForm = ({ setFieldValue, onClose, isSubmitting }) => {
  return (
    <div className={classes.folder_wrapper}>
      <h4>New Folder Form</h4>
      <div className={classes.input_group_wrapper}>
        <InputField
          placeholder="Type here"
          fullwidth
          name="folder_name"
          label="Folder Name"
        />
        <div style={{ marginBottom: 5 }}>
          <div className={classes.label}>Project Name</div>
          <SelectInput
            options={useProjectOptions}
            placeholder="Project name"
            name="project_name"
            // onChange={(value) => setFieldValue("project_name", value.label)}
            isMulti={false}
          />
        </div>
        <InputField
          placeholder="Type here"
          fullwidth
          name="folder_name"
          label="Date"
          type="date"
        />
      </div>
      <div className={classes.form_action_wrapper}>
        <FormButton variant="cancel" type="button" onClick={onClose}>
          cancel
        </FormButton>
        <FormButton variant="save" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Folder"}
        </FormButton>
      </div>
    </div>
  );
};

export default withForm(NewFolderForm);
