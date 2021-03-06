import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import { Radio, RadioGroup, SimpleGrid, Stack } from "@chakra-ui/react";
import BenTable from "./BeneficiariesTable";
import withForm from "../../../../../hoc/withForm";
import AddBeneficiariesForm from "./AddBeneficiariesForm";

const MultForm4 = ({ page, limit, onBack, isSubmitting }) => {
  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>7. Beneficiaries</div>
        <BenTable />
        <AddBeneficiariesForm />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>
          8. How did you know about FIDA?
        </div>
        <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
          <SimpleGrid columns={2} spacing={2} style={{ alignItems: "center" }}>
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
        page={page}
        onBack={onBack}
        disabled={isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm4);
