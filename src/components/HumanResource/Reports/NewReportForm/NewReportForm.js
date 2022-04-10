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
        //open console to see the form values on submit
        console.log(values);
        if (!file) {
          toast(toastError("Please attach file"));
          return;
        }
        const formData = new FormData();
        formData.append("report", file);
        formData.append("filename", values.report_title)
        //append all the values here depending on what the endpoint expects
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        onSubmit(formData);
      }}
      render={({
        values,
        errors,
        handleSubmit,
        handleChange,
        isSubmitting,
      }) => (
        <div
          className={classes.activity_form_wrapper}
          style={{ padding: "10px 20px" }}
        >
          <Form onSubmit={handleSubmit}>
            <div className={classes.input_group_wrapper}>
              <div className={classes.input_label}>Report Title</div>
              <div className={classes.input_field_wrapper}>
                <InputField
                  placeholder="Type here"
                  fullWidth
                  name="report_title"
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className={classes.input_group_wrapper}>
              <div className={classes.input_label}>Supervisor’s Name</div>
              <div className={classes.input_field_wrapper}>
                <InputField
                  placeholder="Type here"
                  fullWidth
                  name="supervisor_name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={classes.input_group_wrapper}>
              <div className={classes.input_label}>Reporting Period</div>
              <div className={classes.input_field_wrapper}>
                <InputField
                  placeholder="Type here"
                  fullWidth
                  name="reporting_period"
                  onChange={handleChange}
                />
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
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={classes.input_group_wrapper}>
              <div className={classes.input_label}>
                <FormButton variant="colored">Upload File</FormButton>
              </div>
              <div className={classes.input_field_wrapper}>
                <input type="file" onChange={handleFileChange} />
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
                {isSubmitting ? "Saving..." : "Save and Exit"}
              </FormButton>
            </div>
          </Form>
        </div>
      )}
    />
  );
};

export default NewReportForm;
