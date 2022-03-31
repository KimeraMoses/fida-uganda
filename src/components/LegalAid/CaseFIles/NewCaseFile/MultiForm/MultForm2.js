import React from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "./MultiForm.module.css";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import {
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import "./RadioLabel.css";

const MultForm2 = ({
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
          <div className={classes.field_label}>2. Disability Assessment</div>

          <div className={styles.field_label_inner}>
            <div className={classes.field_inner_label}>
              i. Do you have difficulty seeing even if wearing glasses?
            </div>
            <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
              <Stack direction="row">
                <Radio value="1">No - no diffuculty </Radio>
                <Radio value="2">Yes - some difficulty</Radio>
                <Radio value="3">Yes - a lot of difficulty</Radio>
                <Radio value="4">Cannot do at all</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className={styles.field_label_inner}>
            <div className={classes.field_inner_label}>
              ii. Do you have difficulty hearing, even if using a hearing aid?
            </div>
            <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
              <Stack direction="row">
                <Radio value="1">No - no diffuculty </Radio>
                <Radio value="2">Yes - some difficulty</Radio>
                <Radio value="3">Yes - a lot of difficulty</Radio>
                <Radio value="4">Cannot do at all</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className={styles.field_label_inner}>
            <div className={classes.field_inner_label}>
              iii. Do you have difficulty walking or climbing steps?
            </div>
            <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
              <Stack direction="row">
                <Radio value="1">No - no diffuculty </Radio>
                <Radio value="2">Yes - some difficulty</Radio>
                <Radio value="3">Yes - a lot of difficulty</Radio>
                <Radio value="4">Cannot do at all</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className={styles.field_label_inner}>
            <div className={classes.field_inner_label}>
              iv. Do you have difficulty remembering or concentrating?
            </div>
            <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
              <Stack direction="row">
                <Radio value="1">No - no diffuculty </Radio>
                <Radio value="2">Yes - some difficulty</Radio>
                <Radio value="3">Yes - a lot of difficulty</Radio>
                <Radio value="4">Cannot do at all</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className={styles.field_label_inner}>
            <div className={classes.field_inner_label}>
              v. Do you have difficulty (with self-care such as) washing all
              over or dressing?
            </div>
            <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
              <Stack direction="row">
                <Radio value="1">No - no diffuculty </Radio>
                <Radio value="2">Yes - some difficulty</Radio>
                <Radio value="3">Yes - a lot of difficulty</Radio>
                <Radio value="4">Cannot do at all</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className={styles.field_label_inner}>
            <div className={classes.field_inner_label}>
              vi. Using your usual (customary) language, do you have difficulty
              communicating, for example understanding or being understood?
            </div>
            <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
              <Stack direction="row">
                <Radio value="1">No - no diffuculty </Radio>
                <Radio value="2">Yes - some difficulty</Radio>
                <Radio value="3">Yes - a lot of difficulty</Radio>
                <Radio value="4">Cannot do at all</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div className={styles.field_label_inner}>
            <div className={classes.field_inner_label}>
              vii. From the disability assessment, is the client disabled?
            </div>
            <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
              <Stack direction="row">
                <Radio value="1" className={classes.raadio_label}>Yes</Radio>
                <Radio value="2">No</Radio>
              </Stack>
            </RadioGroup>
          </div>
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

export default MultForm2;
