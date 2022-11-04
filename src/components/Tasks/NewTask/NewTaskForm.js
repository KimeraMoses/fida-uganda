import React, { useEffect, useState } from "react";
import classes from "../../HumanResource/FidaAssets/NewAsset/NewAsset.module.css";
import styles from "./NewTaskForm.module.css";
import InputField from "../../common/UI/InputField/InputField";
import FormButton from "../../common/UI/FormButton/FormButton";
import { AttachmentIcon } from "../../../assets/Icons/Icons";
import { Form, Formik } from "formik";
import { Heading, SimpleGrid, useToast } from "@chakra-ui/react";
import { toastError } from "../../../lib/toastDetails";
import { taskInitialValues, taskSchema } from "./taskSchema";
import MultiUpload from "../../common/MultiUpload";
import { useUsers } from "../../../hooks/useUser";
import SelectInput from "./../../Membership/Allocations/AllocationForm/SelectInput";

const Tags = [
  { label: "Legal Aid", value: "legal aid" },
  { label: "Court case", value: "court case" },
  { label: "Court processors", value: "court processors" },
];

let outlines = [];

const NewTaskForm = ({ onSubmit, error, isError, isSubmitting }) => {
  const users = useUsers();
  const [files, setFiles] = useState([]);
  const toast = useToast();
  const [outline, setOutLine] = useState("");

  const outlineHandler = (e) => {
    e.preventDefault();
    outlines.push(outline);
    setOutLine("");
  };
  let userArray = [];
  users &&
    users.forEach((user) => {
      if (user.name) {
        userArray.push({
          label: user.name,
          value: user.value,
        });
      }
    });

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={taskInitialValues}
      validationSchema={taskSchema}
      onSubmit={(values) => {
        values.outlines = outlines;
        onSubmit(values);
      }}
    >
      <div className={classes.new_asset_wrapper}>
        <Form>
          <div>
            <Heading fontSize="md" fontWeight="medium">
              Task Title
            </Heading>
            <InputField name="title" placeholder="Task Title" fullWidth />
          </div>
          <div>
            <Heading fontSize="md" fontWeight="medium" mt={5}>
              Task Description
            </Heading>
            <InputField
              name="description"
              type="text"
              placeholder="Task Description"
              fullWidth
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
                fullWidth
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
                fullWidth
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
              <div style={{ marginRight: 10 }}>
                <SelectInput
                  name="tags"
                  // onChange={(value) => console.log("tags", value)}
                  options={Tags}
                  placeholder="Select tags"
                />
              </div>
            </div>
            <div className={styles.tag_wrapper}>
              <h6>
                <AttachmentIcon />
                Team
              </h6>
              <div style={{ marginLeft: 10 }}>
                <SelectInput
                  name="teams"
                  // onChange={(value) => console.log("teams", value)}
                  options={userArray}
                  placeholder="Select teams"
                />
              </div>
            </div>
          </SimpleGrid>
          <div className={styles.asset_outline_wrapper}>
            <h6>
              <AttachmentIcon /> Outlines
            </h6>
            <div className={styles.outline_list}>
              <ul>
                {outlines.map((outline) => {
                  return <li key={outline}>{outline}</li>;
                })}
              </ul>
              <InputField
                placeholder="Type outline and press enter or add button"
                name="outline"
                value={outline}
                fullWidth={true}
                onChange={(e) => setOutLine(e.target.value)}
              />
              <div style={{ float: "right" }}>
                <FormButton
                  variant="colored"
                  rounded={true}
                  onClick={outlineHandler}
                >
                  + Add
                </FormButton>
              </div>
            </div>
          </div>
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
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Adding..." : "Add Task"}
            </FormButton>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewTaskForm;
