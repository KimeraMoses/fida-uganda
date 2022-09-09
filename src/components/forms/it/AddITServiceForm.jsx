import React from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import withForm from "../../../hoc/withForm";
// import { itProductInitialValues, itProductOrderSchema } from "./schemas/it";
import InputField from "../../common/UI/InputField/InputField";

const AddITServiceForm = ({ isSubmitting }) => {
  return (
    <SimpleGrid p={5} gap={3}>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="name" placeholder="Service name" />
        <InputField name="service_provider" placeholder="Service Provider" />
      </SimpleGrid>
      <SimpleGrid>
        <InputField name="description" placeholder="Description" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="status" placeholder="Status" />
        <InputField name="class" placeholder="Class" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="category" placeholder="Category" />
        <InputField name="amount" placeholder="Amount" />
        <InputField name="payment_status" placeholder="Payment Status" />
        <InputField name="currency" placeholder="Currency" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField
          label="Purchase Date"
          type="date"
          name="purchase_date"
        />
        <InputField name="expiry_date" label="Expiry Date" type="date" />

      </SimpleGrid>

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
        Add Service
      </Button>
    </SimpleGrid>
  );
};

export default withForm(AddITServiceForm);
