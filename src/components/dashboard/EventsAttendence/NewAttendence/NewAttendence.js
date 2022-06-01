import {
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./NewAttendence.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { useProjectOptions } from "../../../../hooks/useProjects";
import SelectInput from "../../../Membership/Allocations/AllocationForm/SelectInput";

const NewAttendence = ({ onClose, isSubmitting, setFieldValue }) => {
  const projectOptions = useProjectOptions();

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
        <InputGroup>
          <InputLeftAddon children="0 - 17 years" />
          <Input
            type="number"
            placeholder="Type here"
            className={classes.input_field}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="18 - 30 years" />
          <Input
            type="number"
            placeholder="Type here"
            className={classes.input_field}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="31 - 59 years" />
          <Input
            type="number"
            placeholder="Type here"
            name="year"
            className={classes.input_field}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="59 and above years" />
          <Input
            type="number"
            placeholder="Type here"
            name="year"
            className={classes.input_field}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Undisclosed" />
          <Input
            type="number"
            placeholder="Type here"
            name="year"
            className={classes.input_field}
          />
        </InputGroup>
      </SimpleGrid>
      <div className={classes.attendence_upload_wrapper}>
        <div className={classes.file_upload}>
          <div className={classes.file_upload_label}>Upload file</div>
        </div>
        <div className={classes.file_upload_area}>
          <input type="file" hidden accept=".pdf, .docx, .xls" />
          Click to browse <br />
          or drag and drop your files
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
