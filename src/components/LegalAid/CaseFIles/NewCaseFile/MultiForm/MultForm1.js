import React, { useState, useEffect } from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "./MultiForm.module.css";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import InputField from "../../../../common/UI/InputField/InputField";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import { Form, Formik } from "formik";
import { caseFileObject, caseFileSchema } from "./schema";
import SelectField from "./../../../../common/SelectField";
import { toastError } from "../../../../../lib/toastDetails";
import SearchableField from "./../../../../common/UI/SearchableField/SearchableField";

const ClientsData = [
  {
    id: 0,
    name: "Kimera Moses",
    profession: "Lawyer",
    sex: "male",
    nin: "RWTYUEEUIOJAH6789",
  },
  {
    id: 0,
    name: "Conrad Dev",
    profession: "Dev",
    sex: "male",
    nin: "RWTYUEEUIOJAH6789",
  },
  {
    id: 0,
    name: "Cynthia Moxhus",
    profession: "Dentist",
    sex: "Female",
    nin: "RWTYUEEUIOJAH6789",
  },
];

const MultForm1 = ({
  caseFile,
  page,
  isClvCaseFile,
  isNew,
  onAddCaseFile,
  isAddingCaseFile,
  isErrorAddingCaseFile,
  errorAddingCaseFile,
  isErrorUpdatingCaseFile,
  errorUpdatingCaseFile,
  handleEditForward,
}) => {
  const toast = useToast();
  const initialValues = caseFileObject(caseFile);
  const [selectedClvName, setSelectedClvName] = useState("");
  const [selectedClient, setSelectedClient] = useState("");

  useEffect(() => {
    if (isErrorAddingCaseFile) {
      toast(toastError(errorAddingCaseFile));
    }
    if (isErrorUpdatingCaseFile) {
      toast(toastError(errorUpdatingCaseFile));
    }
  }, [
    isErrorAddingCaseFile,
    isErrorUpdatingCaseFile,
    toast,
    errorAddingCaseFile,
    errorUpdatingCaseFile,
  ]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={caseFileSchema}
      onSubmit={() => {
        console.log("Some thing");
      }}
    >
      {({ values }) => {
        return (
          <div className={classes.form_wrapper}>
            <Form>
              {isClvCaseFile && (
                <div className={classes.field_wrapper}>
                  <div className={classes.field_label}>CLV Details </div>
                  <SimpleGrid
                    columns={4}
                    spacing={2}
                    style={{ alignItems: "center" }}
                  >
                    <SearchableField
                      placeholder="CLV Name"
                      data={ClientsData}
                      setSelectedItem={setSelectedClvName}
                      selectedItem={selectedClvName.name}
                      name="clvName"
                    />

                    <InputField placeholder="CLV ID number" name="clvId" />
                    <InputField
                      placeholder="Project of Attachment"
                      name="project"
                    />
                    <InputField
                      placeholder="District of Operation"
                      name="district"
                    />
                  </SimpleGrid>
                </div>
              )}
              <div className={classes.field_wrapper}>
                <div className={classes.field_label}>1. Personal Address</div>
                <div className={classes.field_wrapper}>
                  <SimpleGrid columns={3} spacing={2}>
                    <div>BIO DATA</div>
                    <div>COMPLAINANT</div>
                    <div>RESPONDENT</div>
                  </SimpleGrid>
                </div>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Name</div>
                  <SearchableField
                    placeholder="Type client Name"
                    data={ClientsData}
                    setSelectedItem={setSelectedClient}
                    selectedItem={selectedClient.name}
                    name="complainantNamee"
                  />

                  <InputField
                    placeholder="Type Here"
                    name="respondentName"
                    fullwidth
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center", marginBottom: 10 }}
                >
                  <div className={styles.field_row_label}>Sex</div>
                  <SelectField
                    name="complainantSex"
                    options={[
                      { label: "Male", value: "M" },
                      { label: "Female", value: "F" },
                    ]}
                  />
                  <SelectField
                    name="respondentSex"
                    options={[
                      { label: "Male", value: "M" },
                      { label: "Female", value: "F" },
                    ]}
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Age</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantAge"
                    type="number"
                  />
                  <InputField
                    placeholder="Type Here"
                    type="number"
                    name="respondentAge"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Telephone Number</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantPhoneNumber"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentPhoneNumber"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Country</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantCountry"
                    type="number"
                  />
                  <InputField
                    placeholder="Type Here"
                    type="number"
                    name="respondentCountry"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    NATIONAL IDENTIFICATION No.
                  </div>
                  <InputField placeholder="Type Here" name="complainantNIN" />
                  <InputField placeholder="Type Here" name="respondentNIN" />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>District</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantDistrict"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentDistrict"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    SubCounty/Town Council
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantSubCounty"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentSubCounty"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Parish</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantParish"
                  />
                  <InputField placeholder="Type Here" name="respondentParish" />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Village</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantVillage"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentVillage"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Parish</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantParish"
                  />
                  <InputField placeholder="Type Here" name="respondentParish" />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Marital Status</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantMaritalStatus"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentMaritalStatus"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Accompanied By</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantAccompaniedBy"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentAccompaniedBy"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Job</div>
                  <InputField placeholder="Type Here" name="complainantJob" />
                  <InputField placeholder="Type Here" name="respondentJob" />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>Place of work</div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantPlaceOfWork"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentPlaceOfWork"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    Level of Education
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantLevelOfEducation"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentLevelOfEducation"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    Preferred Language
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantPreferredLanguage"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentPreferredLanguage"
                  />
                </SimpleGrid>
                <SimpleGrid
                  columns={3}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={styles.field_row_label}>
                    Relationship with Respondent
                  </div>
                  <InputField
                    placeholder="Type Here"
                    name="complainantRelationshipWithRespondent"
                  />
                  <InputField
                    placeholder="Type Here"
                    name="respondentRelationshipWithComplainant"
                  />
                </SimpleGrid>
              </div>
              {isNew ? (
                <ActionButtons
                  page={page}
                  onForward={onAddCaseFile}
                  values={values}
                  type="submit"
                />
              ) : (
                <ActionButtons
                  page={page}
                  onForward={handleEditForward}
                  isForwardLoading={isAddingCaseFile}
                  values={values}
                />
              )}
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default MultForm1;
