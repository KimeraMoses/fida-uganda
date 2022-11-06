import React, { useEffect, useMemo } from "react";
import formClasses from "../../../Membership/MembersActivities/NewActivityForm/NewActivityForm.module.css";
import classes from "./NewAsset.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { Form, Formik } from "formik";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import { toastError } from "../../../../lib/toastDetails";
import { assetInitialValues, assetSchema } from "./schema";
import SelectField from "../../../common/SelectField";
import { assetTypeOptions } from "../../../../lib/options";
import { useProjectOptions } from "../../../../hooks/useProjects";
import { FileInput } from "../../../common/CustomFileInput/CustomFileInput.component";
import SelectInputField from "../../../common/UI/SelectInputField/SelectInputField";
import { AttachmentIcon } from "../../../../assets/Icons/Icons";

const NewAsset = ({ onClose, error, isError, onSubmit, isSubmitting }) => {
  const projectOptions = useProjectOptions();
  const projects = useMemo(() => projectOptions, [projectOptions]);
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  //
  // const{num_units, unit_price} = values ||{};
  //
  // useEffect(() => {
  //     values.amount = (parseInt(num_units) || 0) * (parseInt(unit_price) || 0);
  // });

  return (
    <Formik
      initialValues={assetInitialValues}
      validationSchema={assetSchema}
      onSubmit={async (values) => {
        //open console to see the form values on submit
        if (!values?.file) {
          toast(toastError("Please attach file"));
          return;
        }
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("office_in_possession", values.office_in_possession);
        formData.append("person_in_possession", values.person_in_possession);
        formData.append("budget_year", values.budget_year);
        formData.append("type", values.type);
        formData.append("num_units", values.num_units);
        formData.append("project", values.project);
        formData.append("unit_price", values.unit_price);
        formData.append("amount", values.amount);
        formData.append("date_delivered", values.date_delivered);
        formData.append("location", values.location);
        formData.append("file", values?.file);
        await onSubmit(formData);
      }}
      render={({
        handleSubmit,
        setFieldValue,
        // isSubmitting,
      }) => (
        <div
          className={formClasses.activity_form_wrapper}
          style={{ padding: "10px 20px" }}
        >
          <Form onSubmit={handleSubmit}>
            <div className={classes.new_asset_wrapper}>
              <SimpleGrid columns={2} spacing={2}>
                <InputField placeholder="Asset Name" name="name" fullWidth />
                <InputField
                  placeholder="Budget Year"
                  name="budget_year"
                  fullWidth
                />
              </SimpleGrid>
              <SimpleGrid columns={2} spacing={2} style={{ marginBottom: 10 }}>
                <SelectInputField
                  data={projects}
                  name="project"
                  placeholder="Project of Attachment"
                  setFieldValue={setFieldValue}
                />
                <SelectField
                  placeholder="Select Asset Type"
                  name="type"
                  options={assetTypeOptions}
                />
              </SimpleGrid>
              <SimpleGrid columns={2} spacing={2}>
                <InputField
                  fullWidth
                  placeholder="Unit Price"
                  name="unit_price"
                />
                <InputField
                  fullWidth
                  placeholder="Number of Units Required"
                  name="num_units"
                />
                {/* this field will need to be made auto calculated */}
                <InputField fullWidth placeholder="Amount" name="amount" />
              </SimpleGrid>
              <InputField
                placeholder="Date Delivered"
                name="date_delivered"
                type="date"
                fullWidth
              />
              <InputField
                placeholder="Office in Possession"
                name="office_in_possession"
                fullWidth
              />
              <InputField
                placeholder="Person (s) in Possession"
                name="person_in_possession"
                fullWidth
              />
              <InputField placeholder="Location" name="location" fullWidth />
              <div className={classes.asset_attachement_wrapper}>
                <h6>
                  <AttachmentIcon /> Attachment
                </h6>
                <div className={classes.attachement_display_wrapper}>
                  <FileInput
                    name="file"
                    setFieldValue={setFieldValue}
                    accept=".jpg, .png, jpeg"
                  />
                </div>
              </div>
              {/*<div className={classes.asset_attachement_wrapper}>*/}
              {/*    <div className={classes.attachement_display_wrapper}>*/}
              {/*        <input type="file" onChange={handleFileChange}/>*/}
              {/*    </div>*/}
              {/*</div>*/}

              <div className={formClasses.form_action_wrapper}>
                <FormButton variant="cancel" type="button" onClick={onClose}>
                  cancel
                </FormButton>
                <FormButton
                  variant="save"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding..." : "Add Asset"}
                </FormButton>
              </div>
            </div>
          </Form>
        </div>
      )}
    />
  );
};

export default NewAsset;
