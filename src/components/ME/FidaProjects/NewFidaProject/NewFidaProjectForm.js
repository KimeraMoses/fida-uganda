import { SimpleGrid, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import InputField from "../../../common/UI/InputField/InputField";
import classes from "./NewFidaProjectForm.module.css";
import { projectInitialValues } from "./schema";
import { toastError } from "../../../../lib/toastDetails";

const NewFidaProjectForm = ({ isSubmitting, isError, error, onSubmit }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

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
              <InputField
                placeholder="District of Operation"
                name="districts_of_operation"
              />
              <InputField
                placeholder="SubCounty of Operation"
                name="subcounties_of_operation"
              />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={2}>
              <InputField
                placeholder="Parishes of Operation"
                name="parishes_of_operation"
              />
              <InputField
                placeholder="Villages of operation"
                name="villages_of_operation"
              />
            </SimpleGrid>
            <InputField placeholder="Target Group" name="targetGroup" />
          </div>
          <hr />
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField
                type="date"
                placeholder="Start Date"
                name="startDate"
              />
              <InputField type="date" placeholder="End Date" name="endDate" />
            </SimpleGrid>
            <InputField placeholder="Project Main objective" name="objective" />
          </div>
          <div style={{ float: "right", padding: "20px 0" }}>
            <FormButton variant="colored" isSubmitting={isSubmitting}>
              Add Project
            </FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewFidaProjectForm;
