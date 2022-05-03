import { SimpleGrid, Button, Flex } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import withForm from "../../../hoc/withForm";
import { MdAdd } from "react-icons/md";
import { useProjectOptions } from "../../../hooks/useProjects";
import { useMemo, useState } from "react";
import SelectInputField from "./../../common/UI/SelectInputField/SelectInputField";

const FleetDatabaseForm = ({ isSubmitting }) => {
  const projects = useProjectOptions();
  const projectOptions = useMemo(() => projects, [projects]);
  const [selected, setSelected] = useState();

  return (
    <SimpleGrid p={5} gap={3}>
      <SimpleGrid columns={2} gap={5}>
        <TextField name="vehicle_make" placeholder="Vehicle make" />
        <TextField name="vehicle_number" placeholder="Vehicle Number" />
        <TextField name="vehicle_model" placeholder="Vehicle model" />
      </SimpleGrid>
      <p>Driver details</p>
      <SimpleGrid columns={2} gap={5}>
        <TextField name="driver_first_name" placeholder="First name" />
        <TextField name="driver_surname" placeholder="Surname" />
        <TextField name="driver_phone" placeholder="Phone number" />
        <TextField
          name="driver_email"
          type="email"
          placeholder="Email Address"
        />
        <TextField name="driver_address" placeholder="Physical Address" />
      </SimpleGrid>
      <hr />
      <SimpleGrid columns={2} gap={5} style={{ alignItems: "center" }}>
        <SelectInputField
          data={projectOptions}
          placeholder="Select Project"
          selected={selected}
          setSelected={setSelected}
        />
        <TextField
          name="region_of_operation"
          placeholder="Region of Operation"
        />
      </SimpleGrid>
      <Flex flexDir="row-reverse">
        <Button
          alignSelf="right"
          mt={5}
          type="submit"
          borderRadius="full"
          bgGradient="linear(to-r, purple.400, purple.700)"
          _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
          size="lg"
          color="white"
          disabled={isSubmitting}
          leftIcon={<MdAdd />}
        >
          {isSubmitting ? "Saving" : "Add"}
        </Button>
      </Flex>
    </SimpleGrid>
  );
};

export default withForm(FleetDatabaseForm);
