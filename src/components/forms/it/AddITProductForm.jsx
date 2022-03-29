import { useEffect } from "react";
import { SimpleGrid, Button, useToast } from "@chakra-ui/react";
import TextField from "../../common/TextField";
// import TextAreaField from "../../common/TextAreaField";
import { Formik, Form,Field, } from "formik";
import { toastError } from "../../../lib/toastDetails";
import {
  itProductInitialValues,
  itProductOrderSchema
} from "./schemas/it";

const FleetDatabaseForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);
  return (
    <Formik
      initialValues={itProductInitialValues}
      validationSchema={itProductOrderSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <SimpleGrid as={Form} p={5} gap={3}>
 
        <SimpleGrid columns={2} gap={5}>
          <TextField name="project_name" placeholder="Project name" />
          <TextField name="budget_year" placeholder="Budget Year" />
          <Field as="select" name="Type">
             <option value="red">Red</option>
             <option value="green">Green</option>
           </Field>
        </SimpleGrid>
        <SimpleGrid columns={2} gap={5}>
          <TextField name="unit_price" placeholder="Unit Price" />
          <TextField name="number_of_units_required" placeholder="Number of Units Required" />
          </SimpleGrid>
          <TextField name="subject_of_procurement" placeholder="Subject of Procurement" />
          <TextField name="date_required" placeholder="Date Required" />
          <TextField name="delivery_location" placeholder="Delivery Location" />
      
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
    </Formik>
  );
};

export default FleetDatabaseForm;
