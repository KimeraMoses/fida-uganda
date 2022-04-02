import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import InputField from "../../../Membership/UI/InputField/InputField";
import classes from "./NewFidaProjectForm.module.css";

const NewFidaProjectForm = () => {
  return (
    <div className={classes.new_project_wrapper}>
      <form>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Personal Information</div>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Project Name" />
            <InputField placeholder="Funder" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Duration" />
            <InputField placeholder="Donor Funds" />
          </SimpleGrid>
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Personal Location</div>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="District of Operation" />
            <InputField placeholder="SubCounty of Operation" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Parishes of Operation" />
            <InputField placeholder="Villages of operation" />
          </SimpleGrid>
          <InputField placeholder="Target Group" />
        </div>
        <hr />
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Start Date" />
            <InputField placeholder="End Date" />
          </SimpleGrid>
          <InputField placeholder="Project Main objective" />
        </div>
        <div style={{ float: "right", padding: "20px 0" }}>
          <FormButton variant="colored">Add Project</FormButton>
        </div>
      </form>
    </div>
  );
};

export default NewFidaProjectForm;
