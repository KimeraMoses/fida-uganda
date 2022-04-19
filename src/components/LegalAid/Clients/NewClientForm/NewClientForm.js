import React from "react";
import classes from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import SelectField from "../../../common/SelectField";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
const NewClientForm = (props) => {
  const { isSubmitting } = props;
  return (
    <Formik
      //   initialValues={initialValues}
      //   validationSchema={caseFileSchema}
      onSubmit={() => {
        console.log("Some thing");
      }}
    >
      {({ values }) => {
        return (
          <div className={classes.form_wrapper}>
            <Form>
              <div className={classes.field_wrapper}>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Name</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantName"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Sex</div>
                  <SelectField
                    name="complainantSex"
                    options={[
                      { label: "Male", value: "M" },
                      { label: "Female", value: "F" },
                    ]}
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Age</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantAge"
                    type="number"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Telephone Number</div>
                  <InputField
                    fullwidth
                    placeholder="Type Here"
                    name="complainantPhoneNumber"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Country</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantCountry"
                    type="number"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    NATIONAL IDENTIFICATION No.
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantNIN"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>District</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantDistrict"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    SubCounty/Town Council
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantSubCounty"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Parish</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantParish"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Village</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantVillage"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Parish</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantParish"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Marital Status</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantMaritalStatus"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Accompanied By</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantAccompaniedBy"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Job</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantJob"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Place of work</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantPlaceOfWork"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    Level of Education
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantLevelOfEducation"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    Preferred Language
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantPreferredLanguage"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={2}
                  spacing={1}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    Relationship with Respondent
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantRelationshipWithRespondent"
                    fullwidth
                  />
                </SimpleGrid>
              </div>
              <div style={{ float: "right", padding: "20px 0" }}>
                <FormButton
                  variant="colored"
                  rounded={true}
                  isSubmitting={isSubmitting}
                >
                  Add Client
                </FormButton>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default NewClientForm;
