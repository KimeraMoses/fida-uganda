import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import InputField from "../../../Membership/UI/InputField/InputField";
import classes from "./NewClientForm.module.css";

const NewClientForm = ({ isEdit }) => {
  return (
    <div className={classes.new_project_wrapper}>
      <form>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Personal Information</div>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
          </SimpleGrid>
          <InputField placeholder="Staff/Client" />
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Personal Address</div>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Phone Number" />
            <InputField placeholder="Email Address" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="District Location" />
            <InputField placeholder="Village" />
          </SimpleGrid>
          <InputField placeholder="Sex" />
        </div>
        <hr />
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Pwd/Non-Pwd" />
            <InputField placeholder="Date of first Session" />
          </SimpleGrid>
          <InputField placeholder="Mode of Communication" />
        </div>

        <div
          className={`${classes.form_btn_wrapper} ${
            !isEdit ? classes.btn_right : ""
          }`}
        >
          {isEdit ? (
            <>
              <FormButton variant="colored">Cancel</FormButton>
              <FormButton variant="colored">Save and exit</FormButton>
            </>
          ) : (
            <FormButton variant="colored">Add Client</FormButton>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewClientForm;
