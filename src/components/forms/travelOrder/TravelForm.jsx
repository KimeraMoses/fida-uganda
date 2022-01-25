import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";
import TextInput from "../../common/TextInput";
import Date from "../../common/Date";
import SubmitButton from "../SubmitButton";
import useForm from "../../../hooks/useForm";
import Time from "../../common/Time";

function TravelForm() {
  const { values, handleChange } = useForm({
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    pickUpLocation: "",
    destination: "",
    projectName: "",
    projectActivity: "",
    purpose: "",
  });
  const {
    startDate,
    startTime,
    endDate,
    endTime,
    pickUpLocation,
    destination,
    projectName,
    projectActivity,
    purpose,
  } = values;
  const isDisabled = !(
    projectName &&
    projectActivity &&
    purpose &&
    startDate &&
    startTime &&
    endDate &&
    endTime &&
    pickUpLocation &&
    destination
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="1rem">
        FIDA Travel Form
      </Heading>
      <SimpleGrid columns={3} gap={4} mb="1.5rem">
        <Text fontSize="lg" fontWeight="bold">
          Start Date and Time
        </Text>
        <Date value={startDate} name="startDate" onChange={handleChange} />
        <Time value={startTime} name="startTime" onChange={handleChange} />
      </SimpleGrid>
      <SimpleGrid columns={3} gap={4} mb="1.5rem">
        <Text fontSize="lg" fontWeight="bold">
          End Date and Time
        </Text>
        <Date value={endDate} name="endDate" onChange={handleChange} />
        <Time value={endTime} name="endTime" onChange={handleChange} />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={4} mb="1rem">
        <TextInput
          placeholder="Pick up location"
          name="pickUpLocation"
          value={pickUpLocation}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Destination"
          name="destination"
          value={destination}
          handleChange={handleChange}
        />
      </SimpleGrid>
      <SimpleGrid columns={1} gap={4}>
        <TextInput
          placeholder="Project Name"
          name="projectName"
          value={projectName}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Project Activity"
          name="projectActivity"
          value={projectActivity}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Purpose"
          name="purpose"
          value={purpose}
          handleChange={handleChange}
        />
      </SimpleGrid>
      <SubmitButton isDisabled={isDisabled} label="Send" />
    </Box>
  );
}

export default TravelForm;
