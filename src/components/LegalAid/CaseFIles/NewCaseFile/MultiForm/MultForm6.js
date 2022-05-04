import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import FormButton from "../../../../common/UI/FormButton/FormButton";
import styles from "./MultForm6.module.css";
import Logo from "../../../../../assets/images/Avater.png";
import withForm from "../../../../../hoc/withForm";
import TextAreaField from "../../../../common/TextAreaField";
import SelectField from "../../../../common/SelectField";
import { caseFileStatusOptions } from "../../../../../lib/options";
import SearchableField from "../../../../common/UI/SearchableField/SearchableField";

const ActionCard = () => {
  return (
    <div className={styles.card_wrapper}>
      <div
        className={styles.avater_wrapper}
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></div>
      <div className={styles.content_wrapper}>
        <h4>Andrew Tebandeke</h4>
        <h6>Case registration and referral to Criminal Cases Expert</h6>
      </div>
    </div>
  );
};

const MultForm6 = ({
  page,
  limit,
  onBack,
  isSubmitting,
  setReferredTo,
  referredTo,
}) => {
  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: "center" }}>
          <div className={classes.field_label}>12. Status</div>
          <SelectField
            name="status"
            placeholder="Select option"
            options={caseFileStatusOptions}
          />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: "center" }}>
          <div className={classes.field_label}>13. Refer Case</div>
          <SearchableField
            placeholder="Search person"
            selectedItem={referredTo.full_name}
            setSelectedItem={setReferredTo}
          />
        </SimpleGrid>
      </div>

      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>14. Reason for referal.</div>
        <TextAreaField name="reason_for_referral" placeholder="Type here" />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>15. Action Taken. </div>
        <div className={styles.action_taken_wrapper}>
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <TextAreaField name="comment" placeholder="Type here" />
          <div className={styles.add_actions_btn}>
            <FormButton variant="outlined">Add Action</FormButton>
          </div>
        </div>
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

export default withForm(MultForm6);
