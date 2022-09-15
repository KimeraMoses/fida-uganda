import { SimpleGrid, Button, Flex } from "@chakra-ui/react";
import withForm from "../../../hoc/withForm";
import { MdAdd } from "react-icons/md";
import { useProjectOptions } from "../../../hooks/useProjects";
import React, { useMemo } from "react";
// import SelectField from "../../Membership/Allocations/AllocationForm/SelectInput";
import InputField from "./../../common/UI/InputField/InputField";
import SelectField from "./../../common/SelectField";


const FleetDatabaseForm = ({ isSubmitting, isEdit, setFieldValue }) => {
  const projects = useProjectOptions();
  const projectOptions = useMemo(() => projects, [projects]);

  return (
    <SimpleGrid p={5} gap={3}>
      <p>Vehicle Details</p>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="vehicle_make" placeholder="Vehicle make" />
        <InputField name="vehicle_number" placeholder="Vehicle Number" />
        <InputField name="vehicle_model" placeholder="Vehicle model" />
      </SimpleGrid>
      <p>Driver details</p>
      <SimpleGrid columns={2} gap={5}>
        <InputField name="driver_first_name" placeholder="First name" />
        <InputField name="driver_surname" placeholder="Surname" />
        <InputField name="driver_phone" placeholder="Phone number" />
        <InputField
          name="driver_email"
          type="email"
          placeholder="Email Address"
        />
        <InputField name="driver_address" placeholder="Physical Address" />
      </SimpleGrid>
      <hr />
      <SimpleGrid columns={2} gap={5} style={{ alignItems: "center" }}>
        <SelectField
          options={projectOptions}
          placeholder="Project name"
          name="project"
          onChange={(value) => setFieldValue("project", value.value)}
          isMulti={false}
          required
        />
        <InputField
          name="region_of_operation"
          placeholder="Region of Operation"
        />
      </SimpleGrid>

      {isEdit && (
        <>
        </>
      )}

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
          {isSubmitting ? "Saving" : isEdit ? "Update" : "Add Vehicle"}
        </Button>
      </Flex>
    </SimpleGrid>
  );
};

export default  withForm(FleetDatabaseForm);
