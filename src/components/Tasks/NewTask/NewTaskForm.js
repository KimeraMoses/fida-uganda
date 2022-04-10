import React, { useEffect, useState } from "react";
import classes from "../../HumanResource/FidaAssets/NewAsset/NewAsset.module.css";
import styles from "./NewTaskForm.module.css";
import InputField from "../../common/UI/InputField/InputField";
import FormButton from "../../common/UI/FormButton/FormButton";
import { AttachmentIcon } from "../../../assets/Icons/Icons";
import { Form, Formik } from "formik";
import {
  Heading,
  SimpleGrid,
  useToast,
  Avatar,
  AvatarGroup
} from "@chakra-ui/react";
import { toastError } from "../../../lib/toastDetails";
import { taskInitialValues, taskSchema } from "./taskSchema";
import MultiUpload from "../../common/MultiUpload";
import { DepartmentButton } from "../TaskCard/TaskCard";

const NewTaskForm = ({ onSubmit, error, isError, isSubmitting }) => {
  const [files, setFiles] = useState([]);
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={taskInitialValues}
      validationSchema={taskSchema}
      onSubmit={values => {
        console.log(values);
        // onSubmit(values);
      }}
    >
      <div className={classes.new_asset_wrapper}>
        <Form>
          <div>
            <Heading fontSize="md" fontWeight="medium">
              Task Title
            </Heading>
            <InputField name="title" placeholder="Task Title" fullwidth />
          </div>
          <div>
            <Heading fontSize="md" fontWeight="medium" mt={5}>
              Task Description
            </Heading>
            <InputField
              name="description"
              type="text"
              placeholder="Task Description"
              fullwidth
            />
          </div>
          <SimpleGrid columns={2} spacingX="40px">
            <div>
              <Heading fontSize="md" fontWeight="medium" mt={5}>
                Start Date
              </Heading>
              <InputField
                name="startDate"
                placeholder="End Date"
                type="date"
                fullwidth
              />
            </div>
            <div>
              <Heading fontSize="md" fontWeight="medium" mt={5}>
                Due Date
              </Heading>
              <InputField
                name="endDate"
                placeholder="End Date"
                type="date"
                fullwidth
              />
            </div>
          </SimpleGrid>
          <SimpleGrid
            columns={2}
            spacingX="20px"
            className={styles.asset_tags_team_wrapper}
          >
            <div className={styles.tag_wrapper}>
              <h6>
                <AttachmentIcon /> Add Tags
              </h6>
              <div className={styles.tags}>
                <DepartmentButton title="Court Case" btnColor="primary" />
                <DepartmentButton title="Court Case" btnColor="primary" />
                <DepartmentButton title="Legal aid" btnColor="secondary" />
              </div>
            </div>
            <div className={styles.tag_wrapper}>
              <h6>
                <AttachmentIcon />
                Team
              </h6>
              <div className={styles.team}>
                <AvatarGroup size="sm" max={2}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
              </div>
            </div>
          </SimpleGrid>
          <div className={classes.asset_attachement_wrapper}>
            <h6>
              <AttachmentIcon /> Attachment
            </h6>
            <MultiUpload files={files} setFiles={setFiles} />
          </div>
          <div style={{ float: "right", padding: "20px 0" }}>
            <FormButton
              variant="colored"
              rounded={true}
              isSubmitting={isSubmitting}
              type="submit"
            >
              Add Task
            </FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewTaskForm;
