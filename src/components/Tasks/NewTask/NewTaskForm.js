import React, { useEffect } from "react";
import classes from "../../HumanResource/FidaAssets/NewAsset/NewAsset.module.css";
import InputField from "../../Membership/Members/NewMemberForm/MultiForm/InputField/InputField";
import FormButton from "../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import { AttachmentIcon } from "../../../assets/Icons/Icons";
import { Form, Formik } from "formik";
import { Heading, SimpleGrid, useToast } from "@chakra-ui/react";
import { toastError } from "../../../lib/toastDetails";
import { taskInitialValues } from "./taskSchema";
// import MultiUpload from "../../common/MultiUpload";

const NewTaskForm = ({ onSubmit, error, isError, isSubmitting }) => {
  // const [files, setFiles] = React.useState([]);
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={taskInitialValues}
      onSubmit={(values) => {
        console.log(values);
        // onSubmit(values);
      }}
    >
      <div className={classes.new_asset_wrapper}>
        <Form>
          <InputField name="title" placeholder="Task Title" fullwidth />
          <InputField
            name="description"
            placeholder="Task Description"
            fullwidth
          />
          <SimpleGrid columns={2}>
            <div>
              <Heading fontSize="md" fontWeight="light" mt={5}>
                Start Date
              </Heading>
              <InputField name="startDate" placeholder="End Date" type="date" />
            </div>
            <div>
              <Heading fontSize="md" fontWeight="light" mt={5}>
                Due Date
              </Heading>
              <InputField name="endDate" placeholder="End Date" type="date" />
            </div>
          </SimpleGrid>
          <div className={classes.asset_attachement_wrapper}>
            <h6>
              <AttachmentIcon /> Attachment
            </h6>
            {/* <MultiUpload files={files} setFiles={setFiles} /> */}
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
