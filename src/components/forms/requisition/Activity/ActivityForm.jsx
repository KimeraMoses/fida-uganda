import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import classes from "./ActivityForm.module.css";
import { Form, Formik } from "formik";
import FormButton from "../../../common/UI/FormButton/FormButton";
import InputField from "../../../common/UI/InputField/InputField";
import {
  activitiesInitialValues,
  activitySchema,
} from "../../../../form_schemas/beneficiaries";

const ActivityForm = ({
  handleAddEditItem,
  editValues,
  setEditValues,
  isEdit,
  setIsEdit,
}) => {
  const newInitialValues = {
    id: editValues?.id,
    item: editValues?.item,
    qty: editValues?.qty,
    unit: editValues?.unit,
  };

  return (
    <Formik
      validationSchema={activitySchema}
      enableReinitialize
      initialValues={isEdit ? newInitialValues : activitiesInitialValues}
    >
      {({ values, resetForm }) => (
        <Form>
          <div className={classes.beneficiaries_form_wrapper}>
            <h4>{isEdit ? "Edit" : "Add New"} Item</h4>
            <SimpleGrid
              columns={3}
              spacing={1}
              style={{ alignItems: "center" }}
            >
              <InputField
                placeholder="Item description"
                name="item"
                fullwidth
                type="text"
                label="Item Description"
              />
              <InputField
                placeholder="Quantity"
                name="qty"
                fullwidth
                type="number"
                label="Qty"
              />
              <InputField
                placeholder="1000"
                name="unit"
                fullwidth
                type="number"
                label="Unit Price(UGX)"
              />
            </SimpleGrid>
            <div className={classes.form_action_wrapper}>
              {isEdit && (
                <FormButton
                  type="button"
                  variant="cancel"
                  rounded={true}
                  onClick={() => {
                    setIsEdit(false);
                    setEditValues({});
                    resetForm();
                  }}
                >
                  Cancel
                </FormButton>
              )}
              <FormButton
                type="button"
                variant="colored"
                rounded={true}
                onClick={() => {
                  if (isEdit) {
                    console.log("new values", values);
                    handleAddEditItem(values, "EDIT");
                    setIsEdit(false);
                  } else {
                    handleAddEditItem(values, "ADD");
                  }
                  resetForm();
                }}
              >
                {isEdit ? "Save" : "+ Add"}
              </FormButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ActivityForm;
