import { useEffect, useState } from "react";
import classes from "../../../Membership/MembersActivities/NewActivityForm/NewActivityForm.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { Form, Formik } from "formik";
import { useToast } from "@chakra-ui/react";
import { toastError } from "../../../../lib/toastDetails";
import { reportSchema, addFolderIdToReport } from "./schema";
import SelectField from "../../../common/SelectField";
import { reportTypeOptions } from "../../../../lib/options";
// import { useUsers } from "../../../../hooks/useUser";
// import SearchableField from "../../../common/UI/SearchableField/SearchableField";

const NewReportForm = ({
  onClose,
  error,
  isError,
  onSubmit,
  folderId,
  isSubmitting,
}) => {
  const [file, setFile] = useState(null);
  // const [selectedUser, setSelectedUser] = useState(null);
  const toast = useToast();

  // const users = useUsers();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const initialValues = addFolderIdToReport(folderId);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={reportSchema}
      onSubmit={(values) => {
        //open console to see the form values on submit
        if (!file) {
          toast(toastError("Please attach file"));
          return;
        }
        const formData = new FormData();
        formData.append("report", file);
        formData.append("filename", values.report_title);
        //append all the values here depending on what the endpoint expects
        Object.keys(values).forEach((key) => {
          if (key !== "supervisor_name") {
            formData.append(key, values[key]);
          }
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
              <div className={classes.input_label}>Report Type</div>
              <div className={classes.input_field_wrapper}>
                <SelectField
                  placeholder="Select Report Type"
                  fullWidth
                  name="type"
                  options={reportTypeOptions}
                />
              </div>
            </div>
            {/*<div className={classes.input_group_wrapper}>*/}
            {/*  <div className={classes.input_label}>Supervisor’s Name</div>*/}
            {/*  <div className={classes.input_field_wrapper}>*/}
            {/*    <SearchableField*/}
            {/*      placeholder="Type client Name"*/}
            {/*      data={users}*/}
            {/*      setSelectedItem={setSelectedUser}*/}
            {/*      selectedItem={selectedUser?.name}*/}
            {/*      name="supervisor_name"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
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
              <FormButton variant="cancel" type="button" onClick={onClose}>
                cancel
              </FormButton>
              <FormButton variant="save" type="submit" disabled={isSubmitting}>
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
