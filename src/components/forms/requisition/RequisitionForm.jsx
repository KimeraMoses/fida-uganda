import React, { useState } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import { requisitionTypeOptions } from "../../../lib/options";
import withForm from "../../../hoc/withForm";
import InputField from "../../common/UI/InputField/InputField";
import SelectInput from "../../../components/Membership/Allocations/AllocationForm/SelectInput.js";
import { useProjectOptions } from "../../../hooks/useProjects";
import SelectInputField from "../../common/UI/SelectInputField/SelectInputField";
import ActivityTable from "./Activity/ActivityTable";
import ActivityForm from "./Activity/ActivityForm";

const RequisitionForm = ({ isSubmitting, setFieldValue }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValues, setEditValues] = useState({});
  const projectOptions = useProjectOptions();
  const [activity, setActivity] = useState("");

  const data = [
    {
      item: "Transport",
      qty: 3,
      unit: 40000,
    },
    {
      item: "Lunch and Breackfast at cafe javas",
      qty: 10,
      unit: 5000,
    },
    {
      item: "Clothes",
      qty: 2,
      unit: 50000,
    },
  ];
  const handleEdit = (item) => {
    setIsEdit(true);
    setEditValues(item);
  };

  const handleAddEditItem = (item, action) => {
    console.log(item);
    if (action === "ADD") {
      //Add Item logic here
    } else if (action === "EDIT") {
      //Edit Item logic here
    } else {
      return;
    }
  };

  return (
    <SimpleGrid p={5} gap={3}>
      <SelectInputField
        data={projectOptions}
        name="project_name"
        placeholder="Select Project"
        setFieldValue={setFieldValue}
      />
      <SimpleGrid columns={2} gap={5}>
        <SelectInput
          name="type"
          placeholder="Select a Type"
          options={requisitionTypeOptions}
          onChange={(option) => {
            setFieldValue("type", option);
            if (option === "Activity") {
              setActivity(option);
            } else {
              setActivity(option);
            }
          }}
          isMulti={false}
        />
        <InputField
          type="number"
          name="budget_year"
          placeholder="Budget Year"
        />
      </SimpleGrid>
      {activity !== "Activity" ? (
        <>
          <SimpleGrid columns={2} gap={5}>
            <InputField
              name="unit_price"
              placeholder="Unit Price"
              type="number"
            />
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

          <InputField
            name="delivery_location"
            placeholder="Delivery Location"
          />
        </>
      ) : (
        <>
          <InputField
            name="activity_name"
            placeholder="Activity Title"
            // type="number"
          />
          <ActivityTable data={data} handleEdit={handleEdit} />
          <ActivityForm
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            editValues={editValues}
            setEditValues={setEditValues}
            handleAddEditItem={handleAddEditItem}
          />
        </>
      )}

      <SimpleGrid
        columns={activity === "Activity" ? 2 : 1}
        gap={5}
        alignItems="center"
      >
        <InputField
          name="date_required"
          placeholder="Date Required"
          type="date"
        />
        {activity === "Activity" ? (
          <InputField name="duty_station" placeholder="Duty Station" />
        ) : (
          <></>
        )}
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
        Add Requisition
      </Button>
    </SimpleGrid>
  );
};

export default withForm(RequisitionForm);
