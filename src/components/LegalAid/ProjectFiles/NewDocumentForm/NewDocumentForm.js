import {useEffect, useState} from "react";
import classes from "../../../Membership/MembersActivities/NewActivityForm/NewActivityForm.module.css";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import {Form, Formik} from "formik";
import {useToast} from "@chakra-ui/react";
import {toastError} from "../../../../lib/toastDetails";
// import { reportSchema, addFolderIdToReport } from "./schema";
// import { useUsers } from "../../../../hooks/useUser";
// import SearchableField from "../../../common/UI/SearchableField/SearchableField";

const NewDocumentForm = ({
                           onClose,
                           error,
                           isError,
                           onSubmit,
                           projectId, projectName,
                           isSubmitting,
                       }) => {
    const [file, setFile] = useState(null);
    // const [selectedUser, setSelectedUser] = useState(null);
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
            initialValues=""
            onSubmit={(values) => {
                //open console to see the form values on submit
                if (!file) {
                    toast(toastError("Please attach file"));
                    return;
                }
                const formData = new FormData();
                formData.append("projectFile", file);
                formData.append("project", projectId);
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
                            <div className={classes.input_label}>Project Title</div>
                            <div className={classes.input_field_wrapper}>
                                <InputField
                                    // placeholder="Type here"
                                    fullwidth
                                    name="Document_title"
                                    value={projectName}
                                    disabled
                                    // onChange={handleChange}
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

export default NewDocumentForm;