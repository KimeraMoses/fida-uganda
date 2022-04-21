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
import { DepartmentButton } from "../TaskCard/TaskCard";
import DropdownInputField from "../../common/UI/DropdownInputField/DropdownInputField";
import { useUsers } from "../../../hooks/useUser";

const Tags = [
  { name: "Legal Aid", color: "primary" },
  { name: "Court case", color: "secondary" },
  { name: "Court processors", color: "tartiary" },
];

let tags = [];
let outlines = [];
let team = [];

const NewTaskForm = ({ onSubmit, error, isError, isSubmitting }) => {
  const users = useUsers();
  const [files, setFiles] = useState([]);
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [outline, setOutLine] = useState("");

  const outlineHandler = (e) => {
    e.preventDefault();
    outlines.push(outline);
    setOutLine("");
  };

  const keyWordHandler = (e) => {
    setShow(false);
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results = Tags.filter((Result) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };

  const selectedItemHandler = (result) => {
    tags.push(result);
    setSearchTerm("");
    setShow(true);
  };

  const teamHandler = (e) => {
    setShow(false);
    const { value } = e.target;
    setSearch(value);

    if (search !== "") {
      const results = users.filter((result) => {
        return Object.values(result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setResults(results);
    }
  };

  const selectedTeamHandler = (result) => {
    team.push(result);
    setSearchTerm("");
    setShow(true);
  };

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
        values.tags = tags.map((tag) => tag.name);
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
                {tags.map((tag) => {
                  return (
                    <DepartmentButton title={tag.name} btnColor={tag.color} />
                  );
                })}
              </div>
              <DropdownInputField
                placeholder="Type tag name e.g. Court Case"
                keyWordHandler={keyWordHandler}
                searchTerm={searchTerm}
                searchResults={searchResults}
                isSelected={show}
                itemClickHandler={selectedItemHandler}
              />
            </div>
            <div className={styles.tag_wrapper}>
              <h6>
                <AttachmentIcon />
                Team
              </h6>
              <div className={styles.team}>
                <DropdownInputField
                  placeholder="Type team member name"
                  keyWordHandler={teamHandler}
                  searchTerm={search}
                  searchResults={results}
                  isSelected={show}
                  itemClickHandler={selectedTeamHandler}
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
                fullwidth={true}
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
