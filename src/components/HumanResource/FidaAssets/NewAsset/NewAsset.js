import { SimpleGrid, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import classes from "./NewAsset.module.css";
import { Form, Formik } from "formik";
import { assetInitialValues, assetSchema } from "./schema";
import { toastError } from "../../../../lib/toastDetails";
import SelectField from "../../../common/SelectField";
import { assetTypeOptions } from "../../../../lib/options";
import { AttachmentIcon } from "../../../../assets/Icons/Icons";
import image1 from "../../../../assets/images/placeholder.png";

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
      validationSchema={assetSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <div className={classes.new_asset_wrapper}>
        <Form>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="Asset Name" name="name" fullwidth />
            <InputField
              placeholder="Budget Year"
              name="budget_year"
              fullwidth
            />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <SelectField
              name="project"
              placeholder="Select Project"
              options={projectOptions}
            />
            <SelectField
              placeholder="Select Asset Type"
              name="type"
              options={assetTypeOptions}
            />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={2}>
            <InputField fullwidth placeholder="Unit Price" name="unit_price" />
            <InputField
              fullwidth
              placeholder="Number of Units Required"
              name="amount"
            />
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
          <div className={classes.asset_attachement_wrapper}>
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
          </div>
          <div style={{ float: "right", padding: "20px 0" }}>
            <FormButton
              variant="colored"
              rounded={true}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Asset"}
            </FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewAsset;
