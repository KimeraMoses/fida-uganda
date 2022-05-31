import React, { useMemo } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import withForm from "../../../hoc/withForm";
import { Form, Formik } from "formik";
import { itProductInitialValues, itProductOrderSchema } from "./schemas/it";
import InputField from "../../common/UI/InputField/InputField";
import { useProjectOptions } from "../../../hooks/useProjects";
import SelectField from "../../Membership/Allocations/AllocationForm/SelectInput";

const ITProductForm = ({ isSubmitting, setFieldValue, onSubmit }) => {
  const projects = useProjectOptions();
  const projectOptions = useMemo(() => projects, [projects]);
  console.log(projectOptions, "project options");
  return (
    <Formik
    initialValues={itProductInitialValues}
    validationSchema={itProductOrderSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    <Form>
    <SimpleGrid p={5} gap={3}>
      <SimpleGrid columns={2} gap={5} style={{ alignItems: "center" }}>
        <SelectField
          options={projectOptions}
          placeholder="Project name"
          name="project_name"
          onChange={(value) => setFieldValue("project_name", value.label)}
          isMulti={false}
        />
        <InputField name="budget_year" placeholder="Budget Year" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="name" placeholder="Name" />
        <InputField name="status" placeholder="Status" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="brand" placeholder="Brand" />
        <InputField name="class" placeholder="Class" />
      </SimpleGrid>
      <SimpleGrid>
        <InputField name="description" placeholder="description" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField
          name="unit_price"
          placeholder="Unit Price (UGX)"
          type="number"
        />
        <InputField
          name="num_units"
          placeholder="Number of Units Required"
          type="number"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="amount" placeholder="Amount" type="number" />
        <InputField name="currency" placeholder="Currency" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="category" placeholder="Category" />
        <InputField name="payment_status" placeholder="Payment Status" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="delivery_location" placeholder="Delivery Location" />
        <InputField
          name="num_units"
          placeholder="Number of Units"
          type="number"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="type" placeholder="Type" />
        <InputField
          name="subject_of_procurement"
          placeholder="Subject of Procurement"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="date_required" label="Date Required" type="date" />
        <InputField name="purchase_date" label="Purchase Date" type="date" />
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
        Add Requisition
      </Button>
    </SimpleGrid>
    </Form>
    </Formik>
  );
};

export default withForm(ITProductForm);
