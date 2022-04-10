import React from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { Select, SimpleGrid, Textarea } from "@chakra-ui/react";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import FormButton from "../../../../common/UI/FormButton/FormButton";
import styles from "./MultForm6.module.css";
import Logo from "../../../../../assets/images/Avater.png";

const ActionCard = () => {
  return (
    <div className={styles.card_wrapper}>
      <div
        className={styles.avater_wrapper}
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      ></div>
      <div className={styles.content_wrapper}>
        <h4>Andrew Tebandeke</h4>
        <h6>Case registration and refferal to Criminal Cases Expert</h6>
      </div>
    </div>
  );
};

const MultForm6 = ({ nextStep, handleChange, values, Continue, Previous }) => {
  return (
    <div className={classes.form_wrapper}>
      <form>
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={2} spacing={2} style={{ alignItems: "center" }}>
            <div className={classes.field_label}>12. Status</div>
            <Select placeholder="Select option">
              <option value="option1">Concluded through ADR/elders</option>
              <option value="option2">Resolved by Legal Aid/Couselling</option>
              <option value="option2">Concluded through Mediation</option>
              <option value="option2">Pending Mediation</option>
              <option value="option2">Pending in Court</option>
            </Select>
          </SimpleGrid>
        </div>
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={2} spacing={2} style={{ alignItems: "center" }}>
            <div className={classes.field_label}>13. Reffer Case</div>
            <Select placeholder="Select option">
              <option value="option1">Kimera Moxhus</option>
              <option value="option2">Ivan Kabanda</option>
            </Select>
          </SimpleGrid>
        </div>

        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>14. Reason for refferal.</div>
          <Textarea placeholder="Type here" />
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>15. Action Taken. </div>
          <div className={styles.action_taken_wrapper}>
            <ActionCard />
            <ActionCard />
            <ActionCard />
            <Textarea placeholder="Type here" />
            <div className={styles.add_actions_btn}>
              <FormButton variant="outlined">Add Action</FormButton>
            </div>
          </div>
        </div>

        <ActionButtons step={values.step} Previous={Previous} />
      </form>
    </div>
  );
};

export default MultForm6;
