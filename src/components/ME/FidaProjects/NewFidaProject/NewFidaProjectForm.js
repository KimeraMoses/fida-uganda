import { SimpleGrid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import InputField from "../../../Membership/UI/InputField/InputField";
import classes from "./NewFidaProjectForm.module.css";
import { projectInitialValues } from "./schema";

const NewFidaProjectForm = ({ isSubmitting, isError, error, onSubmit }) => {
  return (
    <Formik
      initialValues={projectInitialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <div className={classes.new_project_wrapper}>
        <Form>
          <div className={classes.field_wrapper}>
            <div className={classes.field_label}>Personal Information</div>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Project Name" name="name" />
              <InputField placeholder="Funder" name="funder" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Duration" name="duration" />
              <InputField placeholder="Donor Funds" name="donor_funds" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <div className={classes.field_label}>Personal Location</div>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="District of Operation" name="" />
              <InputField placeholder="SubCounty of Operation" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Parishes of Operation" />
              <InputField placeholder="Villages of operation" />
            </SimpleGrid>
            <InputField placeholder="Target Group" name="targetGroup" />
          </div>
          <hr />
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Start Date" name="startDate" />
              <InputField placeholder="End Date" name="endDate" />
            </SimpleGrid>
            <InputField placeholder="Project Main objective" />
          </div>
          <div style={{ float: "right", padding: "20px 0" }}>
            <FormButton variant="colored">Add Project</FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewFidaProjectForm;
