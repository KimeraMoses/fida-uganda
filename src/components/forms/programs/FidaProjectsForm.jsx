import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";
import TextInput from "../../common/TextInput";

function FidaProjectsForm() {
  const { values, handleChange } = useForm({
    name: "",
    funder: "",
    duration: "",
    districts: "",
    counties: "",
    parishes: "",
    villages: "",
    beneficiaries: "",
    startDate: "",
    endDate: "",
    mainObjective: "",
  });

  const {
    name,
    funder,
    duration,
    districts,
    counties,
    parishes,
    villages,
    beneficiaries,
    startDate,
    endDate,
    mainObjective,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="1rem">
        Project Filing Form
      </Heading>
      <Heading fontSize="md">Project Information</Heading>
      <SimpleGrid columns={2} spacing={4} my="4">
        <TextInput
          handleChange={handleChange}
          value={name}
          name="name"
          placeholder="Project Name"
        />
        <TextInput
          handleChange={handleChange}
          value={funder}
          name="funder"
          placeholder="Funder"
        />
        <TextInput
          handleChange={handleChange}
          value={duration}
          name="duration"
          placeholder="Duration"
        />
      </SimpleGrid>
      <Heading fontSize="md">Project Location</Heading>
      <SimpleGrid columns={2} spacing={4} my="4">
        <TextInput
          handleChange={handleChange}
          value={districts}
          name="districts"
          placeholder="District(s) of Operation"
        />
        <TextInput
          handleChange={handleChange}
          value={counties}
          name="counties"
          placeholder="County(ies) of Operation"
        />
        <TextInput
          handleChange={handleChange}
          value={parishes}
          name="parishes"
          placeholder="Parish(es) of Operation"
        />
        <TextInput
          handleChange={handleChange}
          value={villages}
          name="villages"
          placeholder="Village(s) of Operation"
        />
        <TextInput
          handleChange={handleChange}
          value={beneficiaries}
          name="beneficiaries"
          placeholder="Beneficiaries"
        />
      </SimpleGrid>
      <Divider />
      <SimpleGrid columns={2} spacing={4} my="4">
        <TextInput
          handleChange={handleChange}
          value={startDate}
          name="startDate"
          placeholder="Start Date"
        />
        <TextInput
          handleChange={handleChange}
          value={endDate}
          name="endDate"
          placeholder="End Date"
        />
        <TextInput
          handleChange={handleChange}
          value={mainObjective}
          name="mainObjective"
          placeholder="Project Main Objective"
        />
      </SimpleGrid>
      <Button
        type="submit"
        borderRadius="full"
        color="white"
        bgColor="purple.500"
        _hover={{ bg: "purple.600" }}
        leftIcon={<AddIcon />}
      >
        Add Project
      </Button>
    </Box>
  );
}

export default FidaProjectsForm;
