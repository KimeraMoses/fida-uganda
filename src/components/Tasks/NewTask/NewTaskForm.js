import React, { useEffect } from "react";
import classes from "../../HumanResource/FidaAssets/NewAsset/NewAsset.module.css";
import InputField from "../../Membership/Members/NewMemberForm/MultiForm/InputField/InputField";
import FormButton from "../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import { AttachmentIcon } from "../../../assets/Icons/Icons";
import { Form, Formik } from "formik";
import { Heading, useToast } from "@chakra-ui/react";
import { toastError } from "../../../lib/toastDetails";
// import MultiUpload from "../../common/MultiUpload";

const NewTaskForm = ({ onSubmit, error, isError }) => {
  // const [files, setFiles] = React.useState([]);
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      onSubmit={(values) => {
        onSubmit(values);
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
          <Heading fontSize="md" fontWeight="light" mt={5}>
            Due Date
          </Heading>
          <InputField placeholder="End Date" type="date" />

          <div className={classes.asset_attachement_wrapper}>
            <h6>
              <AttachmentIcon /> Attachment
            </h6>
            {/* <MultiUpload files={files} setFiles={setFiles} /> */}
          </div>
          <div style={{ float: "right", padding: "20px 0" }}>
            <FormButton variant="colored" rounded={true}>
              Add Task
            </FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewTaskForm;
