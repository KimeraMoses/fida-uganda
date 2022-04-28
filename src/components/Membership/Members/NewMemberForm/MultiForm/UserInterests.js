import React from "react";
import withForm from "../../../../../hoc/withForm";
import classes from "./MultiForm.module.css";
import ActionButtons from "./ActionButtons/ActionButtons";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const UserInterests = ({
  nextStep,
  prevStep,
  handleChange,
  values,
  Continue,
  Previous,
}) => {
  return (
    <div className={classes.form_wrapper}>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Area of Interest</div>
          <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
            <Stack direction="column">
              <Radio value="1">Legal Aid</Radio>
              <Radio value="2">Litigation / Court Representation</Radio>
              <Radio value="3">Criminal Law</Radio>
              <Radio value="4">Research</Radio>
              <Radio value="5">Community Outreach</Radio>
              <Radio value="6">Advocacy</Radio>
              <Radio value="7">Trainings</Radio>
              <Radio value="8">Baselines and Surveys</Radio>
              <Radio value="9">Psycho-social / Counselling</Radio>
              <Radio value="10">Law / Policy Reform</Radio>
              <Radio value="11">Legislative Drafting</Radio>
              <Radio value="12">Governance</Radio>
              <Radio value="13">Monitoring and Evaluation</Radio>
              <Radio value="14">Oganisational Development</Radio>
              <Radio value="15">Others (Specify)</Radio>
            </Stack>
          </RadioGroup>
        </div>

        <ActionButtons
          step={values.step}
          Continue={Continue}
          Previous={Previous}
        />
    </div>
  );
};

export default withForm(UserInterests);
