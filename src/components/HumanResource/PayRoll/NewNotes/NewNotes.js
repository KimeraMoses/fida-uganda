import { Form, Formik } from "formik";
import React from "react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import TextField from "../../../common/TextField";
import NumberField from "../../../common/NumberField";
import SelectField from "../../../common/SelectField";
import { monthsOptions } from "../../../../lib/options";
import withForm from "../../../../hoc/withForm";

const NewNotes = ({ onSubmit, isSubmitting, handleFileChange, file }) => {


  return (
 
      <SimpleGrid p={5} gap={5}>
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
          <input type="file" onChange={handleFileChange} />
        </Flex>
        <FormButton isSubmitting={isSubmitting} type="submit">
          Upload Note
        </FormButton>
      </SimpleGrid>
  );
};

export default withForm(NewNotes);
