import React from "react";
import classes from "./AddNewFolder.module.css";
import InputField from "./../../../common/UI/InputField/InputField";
import withForm from "./../../../../hoc/withForm";
import { useProjectOptions } from "../../../../hooks/useProjects";
import FormButton from "../../../common/UI/FormButton/FormButton";
import SelectField from "../../../common/SelectField";

const NewFolderForm = ({ setFieldValue, onClose, isSubmitting }) => {
  const projects = useProjectOptions();

  return (
    <div className={classes.folder_wrapper}>
      <h4>New Folder Form</h4>
      <div className={classes.input_group_wrapper}>
        <InputField
          placeholder="Type here"
          fullwidth
          name="name"
          label="Folder Name"
        />
        <div style={{ marginBottom: 5 }}>
          <div className={classes.label}>Project Name</div>
          <SelectField
            options={projects}
            placeholder="Project name"
            name="project"
          />
        </div>
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
