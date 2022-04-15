import React from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "./MultiForm.module.css";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import "./RadioLabel.css";
import { Form, Formik } from "formik";
import { caseFileObject, caseFileTwoSchema } from "./schema";
import RadioSelect from "../../../../common/RadioSelect";
import { disabilityOptions, yesNoOptions } from "../../../../../lib/options";

const MultForm2 = ({
  caseFile,
  page,
  handleEditForward,
  handleEditBack,
  isForwardLoading,
  isBackwardLoading,
}) => {
  const initialValues = caseFileObject(caseFile);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={caseFileTwoSchema}
      onSubmit={() => {}}
    >
      {({ values }) => {
        if (
          values.hearing === "Yes" ||
          values.sight === "Yes" ||
          values.movement === "Yes" ||
          values.remembering === "Yes" ||
          values.washing === "Yes" ||
          values.communicating === "Yes" ||
          values.hearing === "Mostly" ||
          values.sight === "Mostly" ||
          values.movement === "Mostly" ||
          values.remembering === "Mostly" ||
          values.washing === "Mostly" ||
          values.communicating === "Mostly"
        ) {
          values.isDisabled = "Yes";
        } else {
          values.isDisabled = "No";
        }
        return (
          <div className={classes.form_wrapper}>
            <Form>
              <div className={classes.field_wrapper}>
                <div className={classes.field_label}>
                  2. Disability Assessment
                </div>

                <div className={styles.field_label_inner}>
                  <div className={classes.field_inner_label}>
                    i. Do you have difficulty seeing even if wearing glasses?
                  </div>
                  <RadioSelect options={disabilityOptions} name="sight" />
                </div>
                <div className={styles.field_label_inner}>
                  <div className={classes.field_inner_label}>
                    ii. Do you have difficulty hearing, even if using a hearing
                    aid?
                  </div>
                  <RadioSelect options={disabilityOptions} name="hearing" />
                </div>
                <div className={styles.field_label_inner}>
                  <div className={classes.field_inner_label}>
                    iii. Do you have difficulty walking or climbing steps?
                  </div>
                  <RadioSelect options={disabilityOptions} name="movement" />
                </div>
                <div className={styles.field_label_inner}>
                  <div className={classes.field_inner_label}>
                    iv. Do you have difficulty remembering or concentrating?
                  </div>
                  <RadioSelect options={disabilityOptions} name="remembering" />
                </div>
                <div className={styles.field_label_inner}>
                  <div className={classes.field_inner_label}>
                    v. Do you have difficulty (with self-care such as) washing
                    all over or dressing?
                  </div>
                  <RadioSelect options={disabilityOptions} name="washing" />
                </div>
                <div className={styles.field_label_inner}>
                  <div className={classes.field_inner_label}>
                    vi. Using your usual (customary) language, do you have
                    difficulty communicating, for example understanding or being
                    understood?
                  </div>
                  <RadioSelect
                    options={disabilityOptions}
                    name="communicating"
                  />
                </div>
                <div className={styles.field_label_inner}>
                  <div className={classes.field_inner_label}>
                    vii. From the disability assessment, is the client disabled?
                  </div>
                  <RadioSelect options={yesNoOptions} name="isDisabled" />
                </div>
              </div>
              <ActionButtons
                onBackward={handleEditBack}
                onForward={handleEditForward}
                page={page}
                values={caseFile}
                isBackwardLoading={isBackwardLoading}
                isForwardLoading={isForwardLoading}
              />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default MultForm2;
