import { Formik, Form } from "formik";
import { SimpleGrid, Button, useToast } from "@chakra-ui/react";
import { requisitionTypeOptions } from "../../../lib/options";
import TextField from "../../common/TextField";
import SelectField from "../../common/SelectField";
import NumberField from "../../common/NumberField";
import {
  requisitionInitialValues,
  requisitionSchema,
} from "./schemas/requisitions";
import { useEffect, useState } from "react";
import { toastError } from "../../../lib/toastDetails";
import SelectInputField from "../../common/UI/SelectInputField/SelectInputField";
import { useProjectOptions } from "../../../hooks/useProjects";

const RequisitionForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();
  const projectOptions = useProjectOptions();
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={requisitionInitialValues}
      validationSchema={requisitionSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <SimpleGrid as={Form} p={5} gap={3}>
        <SelectInputField
          data={projectOptions}
          selected={selected}
          setSelected={setSelected}
          placeholder="Select Project"
          name="project_name"
        />
        <SimpleGrid columns={2} gap={5}>
          <SelectField
            name="type"
            placeholder="Select Type"
            options={requisitionTypeOptions}
          />
          <TextField name="budget_year" placeholder="Budget Year" />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={5}>
          <NumberField name="unit_price" placeholder="Unit Price" />
          <NumberField name="quantity" placeholder="Number of Units Required" />
        </SimpleGrid>
        <TextField
          name="subject_of_procurement"
          placeholder="Subject of Procurement"
        />
        <TextField name="delivery_location" placeholder="Delivery Location" />
        <TextField
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
    </Formik>
  );
};

export default RequisitionForm;
