import React from "react";
import { SimpleGrid, Button, Textarea } from "@chakra-ui/react";
import withForm from "./../../../../hoc/withForm";
import InputField from "./../../../common/UI/InputField/InputField";

const ComplaintForm = ({ isSubmitting, ...rest }) => {
  return (
    <SimpleGrid p={5} gap={3}>
      <InputField name="name" placeholder="name" label="Name" />
      <InputField
        name="subject"
        placeholder="Type here"
        label="Complaint Subject"
      />
      <div>
        <label>Description</label>
        <Textarea name="description" placeholder="Type Here" />
      </div>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="date" placeholder="Type here" label="Date" />
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
  );
};

export default withForm(ComplaintForm);
