import React, { useEffect } from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import InputField from "../../../../common/UI/InputField/InputField";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import { Formik } from "formik";
import { Form } from "formik";
import { caseFileObject } from "./schema";
import NumberField from "../../../../common/NumberField";
import SelectField from "../../../../common/SelectField";
import { trueFalseOptions } from "../../../../../lib/options";
import TextAreaField from "../../../../common/TextAreaField";
import { toastError } from "../../../../../lib/toastDetails";

const MultForm3 = ({
  caseFile,
  page,
  handleEditForward,
  handleEditBack,
  isBackwardLoading,
  isForwardLoading,
  isErrorUpdatingCaseFile,
  errorUpdatingCaseFile,
}) => {
  const initialValues = caseFileObject(caseFile);
  const toast = useToast();

  useEffect(() => {
    if (isErrorUpdatingCaseFile) {
      toast(toastError(errorUpdatingCaseFile));
    }
  }, [isErrorUpdatingCaseFile, errorUpdatingCaseFile, toast]);

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ values }) => {
        return (
          <div className={classes.form_wrapper}>
            <Form>
              <div className={classes.field_wrapper}>
                <SimpleGrid
                  columns={2}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={classes.field_label}>
                    2. Type of Issue/Matter/Case
                  </div>
                  <InputField
                    name="type"
                    placeholder="Type of Issue/Matter/Case"
                  />
                </SimpleGrid>
              </div>
              <div className={classes.field_wrapper}>
                <SimpleGrid
                  columns={2}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={classes.field_label}>
                    3. Nature of Issue/Matter/Case
                  </div>
                  <InputField placeholder="Nature" name="nature" />
                </SimpleGrid>
              </div>
              <div className={classes.field_wrapper}>
                <SimpleGrid
                  columns={2}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={classes.field_label}>
                    4. How long has this been happening?
                  </div>
                  <NumberField name="duration" placeholder="In Days" />
                </SimpleGrid>
              </div>
              <div className={classes.field_wrapper}>
                <SimpleGrid
                  columns={2}
                  spacing={2}
                  style={{ alignItems: "center" }}
                >
                  <div className={classes.field_label}>
                    5. Have you talked to anyone before?
                  </div>
                  <SelectField
                    name="hasTalkedToAnyone"
                    placeholder="Select Option"
                    options={trueFalseOptions}
                  />
                </SimpleGrid>
              </div>
              <div className={classes.field_wrapper}>
                <div className={classes.field_label}>
                  6. Kindly provide more details about the matter/case selected
                  in 2. above
                </div>
                <TextAreaField name="details" placeholder="Type here" />
              </div>
              <div className={classes.field_wrapper}>
                <div className={classes.field_label}>
                  7. Tell us the person or organization and the action that was
                  taken.
                </div>
                <TextAreaField name="actionsTaken" placeholder="Type here" />
              </div>

              <ActionButtons
                page={page}
                isBackwardLoading={isBackwardLoading}
                isForwardLoading={isForwardLoading}
                onBackward={handleEditBack}
                onForward={handleEditForward}
                values={values}
              />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default MultForm3;
