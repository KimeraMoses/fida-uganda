import { Formik, Form } from "formik";
import { SimpleGrid, Button } from "@chakra-ui/react";
import TextField from "../TextField";
import SelectField from "../SelectField";
import NumberField from "../NumberField";
import { requisitionTypeOptions } from "../../assets/options";
import {
  requisitionInitialValues,
  requisitionSchema,
} from "./schemas/requisitions";

const RequisitionForm = () => {
  return (
    <Formik
      initialValues={requisitionInitialValues}
      validationSchema={requisitionSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <SimpleGrid as={Form} p={5} gap={3}>
        <SimpleGrid columns={2} gap={5}>
          <TextField name="project" placeholder="Project" />
          <TextField name="budgetYear" placeholder="Budget Year" />
        </SimpleGrid>
        <SelectField
          name="type"
          placeholder="Select Type"
          options={requisitionTypeOptions}
        />
        <SimpleGrid columns={2} gap={5}>
          <NumberField name="unitPrice" placeholder="Unit Price" />
          <NumberField name="quantity" placeholder="Number of Units Required" />
        </SimpleGrid>
        <TextField name="subject" placeholder="Subject of Procurement" />
        <TextField name="deliveryLocation" placeholder="Delivery Location" />
        <TextField name="dateRequired" placeholder="Date Required" />
        <Button
          mt={5}
          type="submit"
          borderRadius="full"
          bgGradient="linear(to-r, purple.400, purple.700)"
          _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
          size="lg"
          w="100%"
          color="white"
        >
          Add Requisition
        </Button>
      </SimpleGrid>
    </Formik>
  );
};

export default RequisitionForm;
