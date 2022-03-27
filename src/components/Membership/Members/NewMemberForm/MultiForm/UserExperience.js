import React from "react";
import classes from "./MultiForm.module.css";
import ActionButtons from "./ActionButtons/ActionButtons";
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const UserExperience = ({
  nextStep,
  prevStep,
  handleChange,
  values,
  Continue,
  Previous,
}) => {
  return (
    <div className={classes.form_wrapper}>
      <form>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Language Proficiency</div>
          <Checkbox colorScheme="purple">English</Checkbox>
          <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
            <Stack direction="row">
              <Radio value="1">Excellent</Radio>
              <Radio value="2">Good</Radio>
              <Radio value="3">Average</Radio>
              <Radio value="4">Basic</Radio>
            </Stack>
          </RadioGroup>
          <CheckboxGroup colorScheme="purple">
            <Stack spacing={[1]} direction={["column"]}>
              <Checkbox>Kiswahili</Checkbox>
              <Checkbox>French</Checkbox>
              <Checkbox>Others</Checkbox>
            </Stack>
          </CheckboxGroup>
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Professional Experience</div>
          <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
            <Stack direction="column">
              <Radio value="1">Commercial Law</Radio>
              <Radio value="2">Family / Domestic Law</Radio>
              <Radio value="3">Criminal Law</Radio>
              <Radio value="4">Land Law</Radio>
              <Radio value="5">Civil Law</Radio>
              <Radio value="6">Gender and Equality Justice</Radio>
              <Radio value="7">Children Justice</Radio>
              <Radio value="8">Project Management</Radio>
              <Radio value="9">Others</Radio>
            </Stack>
          </RadioGroup>
   
        </div>

        <ActionButtons
          step={values.step}
          Continue={Continue}
          Previous={Previous}
        />
      </form>
    </div>
  );
};

export default UserExperience;
