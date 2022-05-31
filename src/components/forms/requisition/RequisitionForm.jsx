import React from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import { requisitionTypeOptions } from "../../../lib/options";
import withForm from "../../../hoc/withForm";
import InputField from "../../common/UI/InputField/InputField";
import SelectInput from "../../../components/Membership/Allocations/AllocationForm/SelectInput.js";
import { useProjectOptions } from "../../../hooks/useProjects";

const RequisitionForm = ({ isSubmitting, setFieldValue }) => {
  const projectOptions = useProjectOptions();
  return (
    <SimpleGrid p={5} gap={3}>
      <SelectInput
        name="project_name"
        onChange={(option) => setFieldValue("project_name", option)}
        options={projectOptions}
        placeholder="Choose a project"
        isMulti={false}
      />
      <SimpleGrid columns={2} gap={5}>
        <SelectInput
          name="type"
          placeholder="Select a Type"
          options={requisitionTypeOptions}
          onChange={(option) => setFieldValue("type", option)}
          isMulti={false}
        />
        <InputField
          type="number"
          name="budget_year"
          placeholder="Budget Year"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="unit_price" placeholder="Unit Price" type="number" />
        <InputField
          name="num_units"
          placeholder="Number of Units Required"
          type="number"
        />
      </SimpleGrid>
      <InputField
        name="subject_of_procurement"
        placeholder="Subject of Procurement"
      />

      <InputField name="delivery_location" placeholder="Delivery Location" />
      <InputField
        name="date_required"
        placeholder="Date Required"
        type="date"
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
        isLoading={isSubmitting}
      >
        Add Requisition
      </Button>
    </SimpleGrid>
  );
};

export default withForm(RequisitionForm);
