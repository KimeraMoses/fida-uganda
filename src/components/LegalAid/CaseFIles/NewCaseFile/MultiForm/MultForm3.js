import React from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { Select, SimpleGrid, Textarea } from "@chakra-ui/react";
import InputField from "../../../../common/UI/InputField/InputField";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import { Formik } from "formik";
import { Form } from "formik";
import { caseFileObject } from "./schema";

const MultForm3 = ({
  caseFile,
  page,
  handleEditForward,
  handleEditBack,
  isBackwardLoading,
  isForwardLoading,
}) => {
  const initialValues = caseFileObject(caseFile);

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
                  <Select placeholder="Select option">
                    <option value="option1">Paid</option>
                    <option value="option2">Pending</option>
                  </Select>
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
                  <InputField placeholder="Criminal" />
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
                  <Select placeholder="00 days">
                    <option value="option1">01 Days</option>
                    <option value="option2">02 Days</option>
                    <option value="option2">03 Days</option>
                  </Select>
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
                  <Select placeholder="Select Option">
                    <option value="option1">No</option>
                    <option value="option2">Yes</option>
                  </Select>
                </SimpleGrid>
              </div>
              <div className={classes.field_wrapper}>
                <div className={classes.field_label}>
                  6. Kindly provide more details about the matter/case selected
                  in 2. above
                </div>
                <Textarea placeholder="Type here" />
              </div>
              <div className={classes.field_wrapper}>
                <div className={classes.field_label}>
                  7. Tell us the person or organization and the action that was
                  taken.
                </div>
                <Textarea placeholder="Type here" />
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
