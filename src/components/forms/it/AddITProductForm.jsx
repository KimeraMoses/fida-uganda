import React from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import withForm from "../../../hoc/withForm";
// import { itProductInitialValues, itProductOrderSchema } from "./schemas/it";
import InputField from "../../common/UI/InputField/InputField";

const ITProductForm = ({isSubmitting}) => {
  return (
    <SimpleGrid p={5} gap={3}>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="project_name" placeholder="Project name" />
        <InputField name="budget_year" placeholder="Budget Year" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="unit_price" placeholder="Unit Price (UGX)" type="number" />
        <InputField
          name="number_of_units_required"
          placeholder="Number of Units Required"
          type="number"
        />
      </SimpleGrid>
      <SimpleGrid>
        <InputField name="type" placeholder="Type of product" />
      </SimpleGrid>
      <InputField
        name="subject_of_procurement"
        placeholder="Subject of Procurement"
      />
      <InputField
        type="date"
        name="date_required"
        placeholder="Date Required"
      />
      <InputField name="delivery_location" placeholder="Delivery Location" />

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
        Add Requisition
      </Button>
    </SimpleGrid>
  );
};

export default withForm(ITProductForm);
