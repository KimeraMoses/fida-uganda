import { Form, Formik } from "formik";
import React from "react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import TextField from "../../../common/TextField";
import NumberField from "../../../common/NumberField";
import SelectField from "../../../common/SelectField";
import { monthsOptions } from "../../../../lib/options";

const NewNotes = ({ onSubmit, isSubmitting }) => {
  const [note, setNote] = React.useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    setNote(file);
  };

  return (
    <Formik
      initialValues={{ title: "", month: "", year: "", status: "unread" }}
      onSubmit={(values) => {
        const formData = new FormData();
        formData.append("note", note);
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        onSubmit(formData);
      }}
    >
      <SimpleGrid as={Form} p={5} gap={5}>
        <TextField name="title" label="Title" placeholder="Title" />
        <SelectField
          name="month"
          label="Month"
          placeholder="Select Month"
          options={monthsOptions}
        />
        <NumberField name="year" label="Year" placeholder="Year" />
        <Flex gap={5} alignItems="center">
          <Heading fontSize="md" fontWeight="medium">
            Select File:
          </Heading>
          <input type="file" onChange={handleChange} />
        </Flex>
        <FormButton isSubmitting={isSubmitting} type="submit">
          Upload Note
        </FormButton>
      </SimpleGrid>
    </Formik>
  );
};

export default NewNotes;
