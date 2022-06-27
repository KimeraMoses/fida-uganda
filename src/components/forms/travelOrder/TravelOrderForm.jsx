import { useEffect } from "react";
import { SimpleGrid, Button, useToast } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import TextAreaField from "../../common/TextAreaField";
import { Formik, Form } from "formik";
import { toastError } from "../../../lib/toastDetails";
import {
  travelOrderInitialValues,
   travelOrderSchema,
} from "./schemas/travelOrder";

const TravelOrderForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={travelOrderInitialValues}
     validationSchema={travelOrderSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <SimpleGrid as={Form} p={5} gap={5}>
        <SimpleGrid columns={2} gap={5}>
          <TextField
            name="date_requested"
            placeholder="Date Requested"
            label="Date Requested"
            type="date"
          />
          <div></div>
        </SimpleGrid>
        <SimpleGrid columns={2} gap={5}>
          <TextField
            name="journey_start_time"
            placeholder="Journey start time"
            label="Journey start time"
            type="time"
          />
          <TextField
            name="journey_end_time"
            placeholder="Journey end time"
            label="Journey end time"
            type="time"
          />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={5}>
          <TextField
            name="pickup_location"
            placeholder="Pick up location"
            label="Pick up location"
          />
          <TextField
            name="destination"
            placeholder="Destination"
            label="Destination"
          />
        </SimpleGrid>
        <TextAreaField
          name="project_activity"
          placeholder="Project Activity"
          label="Project Activity"
        />
        <TextAreaField name="purpose" placeholder="Purpose" label="Purpose" />
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
          Add Travel Order
        </Button>
      </SimpleGrid>
    </Formik>
  );
};

export default TravelOrderForm;
