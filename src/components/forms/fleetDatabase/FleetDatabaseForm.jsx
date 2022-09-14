import { SimpleGrid, Button, Flex, Textarea } from "@chakra-ui/react";
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
        />
        <InputField
          name="region_of_operation"
          placeholder="Region of Operation"
        />
      </SimpleGrid>

      {isEdit && (
        <>
          <hr />
          <SimpleGrid columns={3} gap={5} style={{ alignItems: "center" }}>
            <InputField
              name="region_of_operation"
              placeholder="0000"
              type="number"
              label="Fuel Loaded(Litre)"
            />
            <InputField
              name="region_of_operation"
              placeholder="Region of Operation"
              label="Fueling Date"
              type="date"
            />
            <InputField
              name="region_of_operation"
              type="number"
              placeholder="000.000"
              label="Money Paid (UGX)"
            />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5} style={{ alignItems: "center" }}>
            <InputField
              name="region_of_operation"
              placeholder="0000"
              type="number"
              label="Fuel Consumed(Litre)"
            />
            <InputField
              name="region_of_operation"
              placeholder="Kilometers Traveled"
              label="Kilometers Traveled"
              type="number"
            />
          </SimpleGrid>
          <hr />
          <SimpleGrid columns={2} gap={5} style={{ alignItems: "center" }}>
            <SelectField
              options={[
                { label: "YES", value: "yes" },
                { label: "NO", value: "no" },
              ]}
              name="region_of_operation"
              // placeholder="Have you made any repairs"
              label="Have you made any repairs"
            />
            <InputField
              name="region_of_operation"
              placeholder="Date of repairs"
              label="Date of repairs"
              type="date"
            />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5} style={{ alignItems: "center" }}>
            <InputField
              name="region_of_operation"
              placeholder="If what item was repaired"
              label="If Yes what item was repaired"
              type="text"
            />
            <InputField
              name="region_of_operation"
              placeholder="Amount paid for repairs(UGX)"
              label="Amount paid for repairs"
              type="number"
            />
          </SimpleGrid>
          <hr />
          <SimpleGrid columns={2} gap={5} style={{ alignItems: "center" }}>
            <SelectField
              options={[
                { label: "Valid", value: "valid" },
                { label: "Expired", value: "expired" },
                { label: "Invalid", value: "invalid" },
              ]}
              name="region_of_operation"
              // placeholder="Have you made any repairs"
              label="Insurance Status"
            />
            <InputField
              name="region_of_operation"
              placeholder="Amount Paid"
              label="Amount Paid"
              type="number"
            />
          </SimpleGrid>
          <p>Comment</p>
          <Textarea name="comment" />
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
