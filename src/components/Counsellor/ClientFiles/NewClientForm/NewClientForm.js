import { SimpleGrid } from "@chakra-ui/react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import InputField from "../../../common/UI/InputField/InputField";
import classes from "./NewClientForm.module.css";
import SelectField from "../../../common/SelectField";
import { clientStaffOptions, sexOptions } from "../../../../lib/options";
import Checkbox from "../../../common/CheckBox";
import withForm from "../../../../hoc/withForm";

const NewClientForm = ({ isEdit, isSubmitting, ...rest }) => {
  const { onClose } = rest;

  return (
    <div className={classes.new_project_wrapper}>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>Personal Information</div>
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="First Name" name="first_name" />
          <InputField placeholder="Last Name" name="last_name" />
        </SimpleGrid>
        <SelectField
          options={clientStaffOptions}
          placeholder="Staff/Client"
          name="patient_role"
        />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>Personal Address</div>
        <SimpleGrid columns={2} spacing={2}>
          <InputField
            placeholder="Phone No. eg. 256789123456"
            maxLength={12}
            name="phone"
          />
          <InputField placeholder="Email Address" type="email" name="email" />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="District Location" name="district" />
          <InputField placeholder="Village" name="village" />
        </SimpleGrid>
        <SelectField options={sexOptions} placeholder="Sex" name="sex" />
      </div>
      <hr />
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} mb={2}>
          <Checkbox name="pwd" description="Is a PWD?" />
          <InputField
            placeholder="Date of first Session"
            type="date"
            name="date_of_first_session"
          />
        </SimpleGrid>
        <InputField
          placeholder="Mode of Communication"
          name="mode_of_communication"
        />
      </div>

      <div
        className={`${classes.form_btn_wrapper} ${
          !isEdit ? classes.btn_right : ""
        }`}
      >
        {isEdit ? (
          <>
            <FormButton variant="colored" onClick={onClose}>
              Cancel
            </FormButton>
            <FormButton
              variant="colored"
              isSubmitting={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Saving" : "Save and exit"}
            </FormButton>
          </>
        ) : (
          <FormButton variant="colored" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving" : "Add Client"}
          </FormButton>
        )}
      </div>
    </div>
  );
};

export default withForm(NewClientForm);
