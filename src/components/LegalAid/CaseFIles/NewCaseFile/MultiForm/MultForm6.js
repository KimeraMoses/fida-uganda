import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import styles from "./MultForm6.module.css";
import Logo from "../../../../../assets/images/Avater.png";
import withForm from "../../../../../hoc/withForm";
import TextAreaField from "../../../../common/TextAreaField";
import SelectField from "../../../../common/SelectField";
import { caseFileStatusOptions } from "../../../../../lib/options";
import SearchableField from "../../../../common/UI/SearchableField/SearchableField";
import { useUser, useUsers } from "../../../../../hooks/useUser";
import { useState } from "react";

const ActionForm = ({ user, values }) => {
  const [value, setValue] = useState("");

  const addAction = () => {
    values.actionsTaken.push({ ...user, message: value });
    setValue("");
  };

  return (
    <div>
      {values?.actionsTaken.map((action, index) => (
        <ActionCard action={action} key={index} />
      ))}
      <Textarea
        name="comment"
        placeholder="Type here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.add_actions_btn}>
        <button
          type="button"
          className="fida__fm_btn fida__btn_outlined"
          disabled={value ? false : true}
          onClick={addAction}
        >
          Add Action
        </button>
      </div>
    </div>
  );
};

const ActionCard = ({ action }) => {
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
        <h4>{action?.full_name}</h4>
        <h6>{action?.message}</h6>
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
  values,
}) => {
  const user = useUser();
  const users = useUsers();

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
            data={users}
            setSelectedItem={setReferredTo}
            selectedItem={referredTo.full_name}
            name="referredTo"
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
          <ActionForm user={user} values={values} />
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
