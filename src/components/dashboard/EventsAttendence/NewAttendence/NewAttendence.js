import {
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./NewAttendence.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { useProjectOptions } from "../../../../hooks/useProjects";
import SelectInput from "../../../Membership/Allocations/AllocationForm/SelectInput";



const NewAttendence = ({ onClose, isSubmitting, setFieldValue, values }) => {
  const projectOptions = useProjectOptions();

  const { femaleCount, maleCount, age0_17, age18_30, age31_59, above59 } =
    values;

  useEffect(() => {
    values.total_participant =
      (parseInt(femaleCount) || 0) + (parseInt(maleCount) || 0);

    values.undisclosed = values.total_participant;

    values.undisclosed =
      values.undisclosed -
      ((parseInt(age0_17) || 0) +
        (parseInt(age18_30) || 0) +
        (parseInt(age31_59) || 0) +
        (parseInt(above59) || 0));
  });

  const GroupInput =(props)=>{
    const {label, type, placeholder, name} = props
    return(
      <div className={classes.input_group_wrapper}>
      <div className={classes.label_wrapper}>{label}</div>
      <InputField
        type={type}
        placeholder={placeholder}
        className={classes.input_field_group}
        name={name}
      />
    </div>
    )
  }

  return (
    <div className={classes.attendence_form_wrapper}>
      <SimpleGrid
        columns={2}
        spacing={1}
        className={classes.input_field_wrapper}
        style={{ marginBottom: 10 }}
      >
        <div className={classes.field_row_label}>Project Name</div>
        <SelectInput
          placeholder="Select Project"
          name="project_name"
          fullwidth
          options={projectOptions}
          isMulti={false}
          onChange={(option) => setFieldValue("project_name", option.label)}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={1}
        className={classes.input_field_wrapperr}
      >
        <div className={classes.field_row_label}>Title of Event/Function</div>
        <InputField placeholder="Type Here" name="title" fullwidth />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={1}
        className={classes.input_field_wrapperr}
      >
        <div className={classes.field_row_label}>Funder</div>
        <InputField placeholder="Type Here" name="funder" fullwidth />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={1}
        className={classes.input_field_wrapperr}
      >
        <div className={classes.field_row_label}>Date</div>
        <InputField placeholder="Type Here" name="date" type="date" fullwidth />
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        spacing={1}
        className={classes.input_field_wrapperr}
      >
        <div>
          <div className={classes.field_row_label}>
            Total No. of Participants
          </div>
          <InputField placeholder="Type Here" name="total_participant" />
        </div>
        <div>
          <div className={classes.field_row_label}>
            No. of Male Participants
          </div>
          <InputField placeholder="Type Here" name="maleCount" />
        </div>
        <div>
          <div className={classes.field_row_label}>
            No. of Female Participants
          </div>
          <InputField placeholder="Type Here" name="femaleCount" />
        </div>
      </SimpleGrid>
      <div className={classes.field_row_label}>Summary of age groups</div>
      <SimpleGrid
        columns={2}
        spacing={1}
        className={classes.input_field_wrapperr}
      >
        <GroupInput type="number" label="0 - 17 years" name="age0_17" placeholder="Type here"/>
        <GroupInput type="number" label="18 - 30 years" name="age18_30" placeholder="Type here"/>
        <GroupInput type="number" label="31 - 59 years" name="age31_59" placeholder="Type here"/>
        <GroupInput type="number" label="59 and above years" name="above59" placeholder="Type here"/>
        <GroupInput type="number" label="Undisclosed" name="undisclosed" placeholder="Type here"/>
      </SimpleGrid>
      <div className={classes.attendence_upload_wrapper}>
        <div className={classes.file_upload}>
          <div className={classes.file_upload_label}>Upload file</div>
        </div>
        <div className={classes.file_upload_area}>
          <input
            type="file"
            accept=".pdf, .docx, .xls"
            onChange={(e) => console.log(e)}
          />
        </div>
      </div>

      <div className={classes.form_actions_wrapper}>
        <FormButton variant="cancel" onClick={onClose} type="button">
          Cancel
        </FormButton>
        <FormButton variant="save" type="submit" disabled={isSubmitting}>
          Submit
        </FormButton>
      </div>
    </div>
  );
};

export default withForm(NewAttendence);
