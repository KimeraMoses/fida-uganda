import React from "react";
import { SimpleGrid, Button, Textarea } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import withForm from "./../../../../hoc/withForm";
import InputField from "./../../../common/UI/InputField/InputField";
import { itComplaintOrderSchema, itComplaintInitialValues } from "../../../forms/it/schemas/it";

const ComplaintForm = ({ isSubmitting, onSubmit, ...rest }) => {
  return (
    <Formik
    initialValues={itComplaintInitialValues}
    validationSchema={itComplaintOrderSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    <Form>
    <SimpleGrid p={5} gap={3}>
      <InputField name="submittedBy" placeholder="Submitted by" label="Submitted by" />
      <InputField
        name="subject"
        placeholder="Type here"
        label="Complaint Subject"
      />
        <InputField name="body" placeholder="Type Here" label="Description"/>
   
      <SimpleGrid columns={2} gap={5}>
        <InputField name="dueDate" label="Due date" Type="Date" />
        <InputField name="status" placeholder="Type here" label="Status" />
      </SimpleGrid>
      <InputField
        name="remarks"
        placeholder="Type here"
        label="Progress and Remarks"
      />
      <Button
        mt={5}
        type="submit"
        borderRadius="full"
        bgGradient="linear(to-r, purple.400, purple.700)"
        _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
        size="lg"
        w="100%"
        color="white"
        disabled={isSubmitting}
      >
        Add Complaint
      </Button>
    </SimpleGrid>
    </Form>
    </Formik>
  );
};

export default withForm(ComplaintForm);
