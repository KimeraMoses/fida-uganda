import React from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";

import { Radio, RadioGroup, SimpleGrid, Stack } from "@chakra-ui/react";
import BenTable from "./BeneficiariesTable";

const MultForm4 = ({
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
          <div className={classes.field_label}>7. Beneficiaries</div>
          <BenTable />
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>
            8. How did you know about FIDA?
          </div>
          <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
            <SimpleGrid
              columns={2}
              spacing={2}
              style={{ alignItems: "center" }}
            >
              <Stack direction="column">
                <Radio value="1">Brochures</Radio>
                <Radio value="2">Posters</Radio>
                <Radio value="3">Legal Education</Radio>
                <Radio value="4">News Papers</Radio>
                <Radio value="5">Workshops</Radio>
                <Radio value="6">Website or Social Media</Radio>
                <Radio value="7">Other CSO</Radio>
              </Stack>
              <Stack direction="column">
                <Radio value="8">Friend/Relative</Radio>
                <Radio value="9">Radio Program</Radio>
                <Radio value="10">Local Council</Radio>
                <Radio value="11">Community Volunteer</Radio>
                <Radio value="12">FIDA - U Member</Radio>
                <Radio value="13">Police</Radio>
                <Radio value="14">Other</Radio>
              </Stack>
            </SimpleGrid>
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

export default MultForm4;