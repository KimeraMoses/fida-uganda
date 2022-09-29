import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import styles from "./MultForm6.module.css";
import withForm from "../../../../../hoc/withForm";
import TextAreaField from "../../../../common/TextAreaField";
import SelectField from "../../../../common/SelectField";
import { caseFileStatusOptions } from "../../../../../lib/options";
import SearchableField from "../../../../common/UI/SearchableField/SearchableField";
import { useUsers } from "../../../../../hooks/useUser";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCaseFile } from "../../../../../store/caseFileReducer";

const ActionForm = ({ values, addAction }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    addAction(value);
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
          onClick={onClick}
        >
          Add Action
        </button>
      </div>
    </div>
  );
};

export const ActionCard = ({ action }) => {
  const { user } = useSelector((state) => state.auth);
  const full_name = action?.full_name ? action.full_name : user?.full_name;
  const image = action?.image ? action?.image : user.image;

  return (
    <div className={styles.card_wrapper}>
      <div
        className={styles.avater_wrapper}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></div>
      <div className={styles.content_wrapper}>
        <h4>{full_name}</h4>
        <h6>{action?.action}</h6>
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
  setFieldValue,
}) => {
  const users = useUsers();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(selectCaseFile(values));
    onBack();
  };

  const addAction = (value) => {
    const action = { userId: user?.id, action: value };
    setFieldValue("actionsTaken", [...values?.actionsTaken, action]);
  };

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
          <ActionForm values={values} addAction={addAction} />
        </div>
      </div>

      <ActionButtons
        page={page}
        onBack={handleGoBack}
        loading={isSubmitting}
        disabled={isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm6);
