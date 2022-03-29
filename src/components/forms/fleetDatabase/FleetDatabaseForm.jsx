import { useEffect } from "react";
import { SimpleGrid, Button, useToast } from "@chakra-ui/react";
import TextField from "../../common/TextField";
// import TextAreaField from "../../common/TextAreaField";
import { Formik, Form } from "formik";
import { toastError } from "../../../lib/toastDetails";
import {
    fleetDatabaseInitialValues,
    fleetDatabaseOrderSchema,
} from "./schemas/fleetDatabase";

const FleetDatabaseForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);
  return (
    <Formik
      initialValues={fleetDatabaseInitialValues}
      validationSchema={fleetDatabaseOrderSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <SimpleGrid as={Form} p={5} gap={3}>
 
        <SimpleGrid columns={2} gap={5}>
          <TextField name="vehicle_make" placeholder="Vehicle make" />
          <TextField name="vehicle_number" placeholder="Vehicle Number" />
          <TextField name="vehicle_model" placeholder="Vehicle model" />
        </SimpleGrid>
        <p>Driver details</p>
        <SimpleGrid columns={2} gap={5}>
          <TextField name="first_name" placeholder="First name" />
          <TextField name="surname" placeholder="Surname" />
          <TextField name="phone_number" placeholder="Phone number" />
          <TextField name="email_address" placeholder="Email Address" />
          <TextField name="physical_address" placeholder="Physical Address" />
        </SimpleGrid>
        <hr/>
        <SimpleGrid columns={2} gap={5}>
          <TextField name="project" placeholder="Project" />
          <TextField name="region_of_operation" placeholder="Region of Operation" />
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
          isLoading={isSubmitting}
        >
          Add
        </Button>
      </SimpleGrid>
    </Formik>
  );
};

export default FleetDatabaseForm;
