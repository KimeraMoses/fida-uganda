import { useEffect, useState } from "react";
import classes from "../../../Membership/MembersActivities/NewActivityForm/NewActivityForm.module.css";
import InputField from "../../../Membership/MembersActivities/NewActivityForm/InputField";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import { Form, Formik } from "formik";
import { useToast } from "@chakra-ui/react";
import { toastError } from "../../../../lib/toastDetails";
import { initialValues } from "./schema";

const NewReportForm = ({ onClose, error, isError, onSubmit, isSubmitting }) => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const formData = new FormData();
        formData.append("report", file);
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        onSubmit(formData);
      }}
    >
      <div
        className={classes.activity_form_wrapper}
        style={{ padding: "10px 20px" }}
      >
        <Form>
          <div className={classes.input_group_wrapper}>
            <div className={classes.input_label}>Report Title</div>
            <div className={classes.input_field_wrapper}>
              <InputField placeholder="Type here" fullWidth name="title" />
            </div>
          </div>
          <div className={classes.input_group_wrapper}>
            <div className={classes.input_label}>Supervisor’s Name</div>
            <div className={classes.input_field_wrapper}>
              <InputField
                placeholder="Type here"
                fullWidth
                name="supervisor_name"
              />
            </div>
          </div>
          <div className={classes.input_group_wrapper}>
            <div className={classes.input_label}>Reporting Period</div>
            <div className={classes.input_field_wrapper}>
              <InputField placeholder="Type here" fullWidth name="period" />
            </div>
          </div>
          <div className={classes.input_group_wrapper}>
            <div className={classes.input_label}>Date</div>
            <div className={classes.input_field_wrapper}>
              <InputField
                type="date"
                placeholder="Type here"
                fullWidth
                name="date"
              />
            </div>
          </div>
          <div className={classes.input_group_wrapper}>
            <div className={classes.input_label}>
              <FormButton variant="colored">Upload File</FormButton>
            </div>
            <div className={classes.input_field_wrapper}>
              <input type="file" onClick={handleFileChange} />
            </div>
          </div>

          <div className={classes.form_action_wrapper}>
            <FormButton
              variant="cancel"
              type="button"
              onClick={() => onClose()}
            >
              cancel
            </FormButton>
            <FormButton variant="save" type="submit">
              Save and Exit
            </FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewReportForm;
