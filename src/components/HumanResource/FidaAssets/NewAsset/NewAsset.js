import { SimpleGrid, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import InputField from "../../../Membership/Members/NewMemberForm/MultiForm/InputField/InputField";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import classes from "./NewAsset.module.css";
import { Form, Formik } from "formik";
import { assetInitialValues } from "./schema";
import { toastError } from "../../../../lib/toastDetails";
import SelectField from "../../../common/SelectField";

const NewAsset = ({
  onSubmit,
  isSubmitting,
  isError,
  error,
  projectOptions,
}) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [toast, isError, error]);

  return (
    <Formik
      initialValues={assetInitialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <div className={classes.new_asset_wrapper}>
        <Form>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Asset Name" name="name" />
            <InputField placeholder="Budget Year" name="budget_year" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <SelectField
              name="project"
              placeholder="Select Project"
              options={projectOptions}
            />
            <InputField placeholder="Asset Type" name="type" />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Unit Price" name="unit_price" />
            <InputField placeholder="Number of Units Required" name="amount" />
          </SimpleGrid>
          <InputField
            placeholder="Date Delivered"
            name="date_delivered"
            type="date"
            fullwidth
          />
          <InputField
            placeholder="Office in Possession"
            name="office_in_possession"
            fullwidth
          />
          <InputField
            placeholder="Person (s) in Possession"
            name="person_in_possession"
            fullwidth
          />
          <InputField placeholder="Location" name="location" fullwidth />
          {/* <div className={classes.asset_attachement_wrapper}>
            <h6>
              <AttachmentIcon /> Attachments (2)
            </h6>
            <div className={classes.attachement_display_wrapper}>
              <div
                className={classes.uploaded_files}
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>

              <div className={classes.new_attachment}>+</div>
            </div>
          </div> */}
          <div style={{ float: "right", padding: "20px 0" }}>
            <FormButton
              variant="colored"
              rounded={true}
              isSubmitting={isSubmitting}
            >
              Add Asset
            </FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewAsset;
