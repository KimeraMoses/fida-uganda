import {
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import withForm from "../../../../hoc/withForm";
import classes from "./NewAttendence.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { useProjectOptions } from "../../../../hooks/useProjects";
import SelectInput from "../../../Membership/Allocations/AllocationForm/SelectInput";

const NewAttendence = ({ onClose, isSubmitting, setFieldValue }) => {
  const projectOptions = useProjectOptions();

  const [totalPaticipants, setTotalPaticipants] = React.useState(0);
  const [malePaticipants, setMalePaticipants] = React.useState();
  const [femalePaticipants, setFemalePaticipants] = React.useState();
  const [age0_17, setAge0_17] = React.useState("");
  const [age18_30, setAge18_30] = React.useState("");
  const [age31_59, setAge31_59] = React.useState("");
  const [above59, setAbove59] = React.useState("");
  const [undisclosed, setUndisclosed] = React.useState("");
  const [sumOfAgeGroups, setSumOfAgeGroups] = React.useState(0);

  const handleCalculateTotalPaticipants = () => {
    setTotalPaticipants(
      parseInt(malePaticipants) + parseInt(femalePaticipants)
    );
  };

  const handleAgeGroups = () => {
    if (age0_17 && age18_30 && age31_59 && above59 && undisclosed) {
      setSumOfAgeGroups(
        parseInt(age0_17) +
          parseInt(age18_30) +
          parseInt(age31_59) +
          parseInt(above59) +
          parseInt(undisclosed)
      );
      console.log(sumOfAgeGroups, "all ages filled");
    }
  };

  const ensureTotalParticipants = () => {
    if(totalPaticipants !== sumOfAgeGroups){
      console.log('the numbers dont add up')
    }else if(totalPaticipants === sumOfAgeGroups){
      console.log('the numbers add up')
    }
  }

  useEffect(()=>{
    ensureTotalParticipants()
  })

  useEffect(() => {
    handleAgeGroups();
  });

  useEffect(() => {
    handleCalculateTotalPaticipants();
  });

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
          <InputField
            placeholder="Type Here"
            name="total_participant"
            value={totalPaticipants}
          />
        </div>
        <div>
          <div className={classes.field_row_label}>
            No. of Male Participants
          </div>
          <InputField
            placeholder="Type Here"
            name="maleCount"
            value={malePaticipants}
            onChange={(e) => setMalePaticipants(e.target.value)}
          />
        </div>
        <div>
          <div className={classes.field_row_label}>
            No. of Female Participants
          </div>
          <InputField
            placeholder="Type Here"
            name="femaleCount"
            value={femalePaticipants}
            onChange={(e) => setFemalePaticipants(e.target.value)}
          />
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
            name="0-17"
            value={age0_17}
            onChange={(e) => setAge0_17(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="18 - 30 years" />
          <Input
            type="number"
            placeholder="Type here"
            className={classes.input_field}
            name="18-30"
            value={age18_30}
            onChange={(e) => setAge18_30(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="31 - 59 years" />
          <Input
            type="number"
            placeholder="Type here"
            name="31-59"
            className={classes.input_field}
            value={age31_59}
            onChange={(e) => setAge31_59(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="59 and above years" />
          <Input
            type="number"
            placeholder="Type here"
            name="59>"
            className={classes.input_field}
            value={above59}
            onChange={(e) => setAbove59(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Undisclosed" />
          <Input
            type="number"
            placeholder="Type here"
            name="undisclosed"
            className={classes.input_field}
            value={undisclosed}
            onChange={(e) => setUndisclosed(e.target.value)}
          />
        </InputGroup>
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
