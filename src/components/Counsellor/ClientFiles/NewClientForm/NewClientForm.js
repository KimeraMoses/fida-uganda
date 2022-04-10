import { useEffect } from "react";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import { toastError } from "../../../../lib/toastDetails";
import FormButton from "../../../common/UI/FormButton/FormButton";
import InputField from "../../../common/UI/InputField/InputField";
import classes from "./NewClientForm.module.css";
import { Form, Formik } from "formik";
import { patientInitialValues, patientSchema } from "./schema";
import SelectField from "../../../common/SelectField";
import {
  clientStaffOptions,
  sexOptions,
  yesNoOptions
} from "../../../../lib/options";

const NewClientForm = ({ isEdit, isSubmitting, onSubmit, error, isError }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={patientInitialValues}
      validationSchema={patientSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <SimpleGrid as={Form}>
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
              <InputField placeholder="Phone Number" name="phone" />
              <InputField placeholder="Email Address" name="email" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="District Location" name="district" />
              <InputField placeholder="Village" name="village" />
            </SimpleGrid>
            <SelectField options={sexOptions} placeholder="Sex" name="sex" />
          </div>
          <hr />
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <SelectField placeholder="Pwd/Non-Pwd" options={yesNoOptions} />
              <InputField placeholder="Date of first Session" type="date" />
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
              <FormButton variant="colored" type="submit">
                Add Client
              </FormButton>
            )}
          </div>
        </div>
      </SimpleGrid>
    </Formik>
  );
};

export default NewClientForm;
