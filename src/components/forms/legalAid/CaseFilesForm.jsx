import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import useForm from "../../../hooks/useForm";
import QASelectInput from "./QASelectInput";
import {
  educationOptions,
  genderOptions,
  maritalStatusOptions,
} from "../../../defaultData/menu/options";
import QANumberInput from "./QANumberInput";
import QATextInput from "./QATextInput";
import { createCase } from "../../../store/reducers/cases";

function CaseFilesForm({ setCurrentForm }) {
  const dispatch = useDispatch();
  const { districts, counties } = useSelector((state) => state.registration);
  const { clients } = useSelector((state) => state.cases);
  const countries = [
    { label: "Burundi", value: "Burundi" },
    { label: "Rwanda", value: "Rwanda" },
    { label: "Tanzania", value: "Tanzania" },
    { label: "Kenya", value: "Kenya" },
    { label: "Uganda", value: "Uganda" },
    { label: "Sudan", value: "Sudan" },
    { label: "Ethiopia", value: "Ethiopia" },
    { label: "Somalia", value: "Somalia" },
  ];
  const allDistricts = districts.map((district) => ({
    label: district.name,
    value: district.id,
  }));
  const allCounties = counties.map((county) => ({
    label: county.name,
    value: county.id,
  }));

  const { values, handleChange } = useForm({
    id: "",
    name: "",
    sex: "",
    age: "",
    email: "",
    phoneNumber: "",
    occupation: "",
    country: "",
    district: "",
    county: "",
    village: "",
    place_of_work: "",
    marital_status: "",
    number_of_beneficiaries: "",
    level_of_education: "",
    preferred_language: "",
    disability: "",
  });

  const {
    id,
    name,
    sex,
    age,
    email,
    phoneNumber,
    occupation,
    country,
    district,
    county,
    village,
    place_of_work,
    marital_status,
    number_of_beneficiaries,
    level_of_education,
    preferred_language,
    disability,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createCase(values));
    setCurrentForm(2);
  };

  return (
    <Box p="3rem" as="form" onSubmit={handleSubmit}>
      <Heading size="lg" mb="2rem">
        Case Registration Form
      </Heading>
      <Heading fontSize="xl" mb="3rem">
        1. Personal Information
      </Heading>
      <SimpleGrid columns={3} spacing={4} my="10">
        <Heading fontSize="md" alignSelf="center">
          Complainant
        </Heading>
        <QASelectInput
          title={id || "ID"}
          value={id}
          name="id"
          handleChange={handleChange}
          options={clients}
          placeholder="Choose Complainant"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={4} my="4">
        <Heading fontSize="md">Bio Data</Heading>
        <Heading fontSize="md">Respondent</Heading>
        <QATextInput
          title="Name"
          value={name}
          name="name"
          handleChange={handleChange}
        />
        <QASelectInput
          title="Sex"
          value={sex}
          name="sex"
          handleChange={handleChange}
          options={genderOptions}
        />
        <QANumberInput
          title="Age"
          value={age}
          name="age"
          handleChange={handleChange}
        />
        <QATextInput
          title="Email"
          value={email}
          name="email"
          handleChange={handleChange}
        />
        <QANumberInput
          title="Phone Number"
          value={phoneNumber}
          name="phoneNumber"
          handleChange={handleChange}
        />
        <QATextInput
          title="Occupation"
          value={occupation}
          name="occupation"
          handleChange={handleChange}
        />
        <QASelectInput
          title="Country"
          value={country}
          name="country"
          handleChange={handleChange}
          options={countries}
        />
        <QASelectInput
          title="District"
          value={district}
          name="district"
          handleChange={handleChange}
          options={allDistricts}
        />
        <QASelectInput
          title="County"
          value={county}
          name="county"
          handleChange={handleChange}
          options={allCounties}
        />
        <QATextInput
          title="Village"
          value={village}
          name="village"
          handleChange={handleChange}
        />
        <QATextInput
          title="Place of Work"
          value={place_of_work}
          name="place_of_work"
          handleChange={handleChange}
        />
        <QASelectInput
          title="Marital Status"
          value={marital_status}
          name="marital_status"
          handleChange={handleChange}
          options={maritalStatusOptions}
        />
        <QANumberInput
          title="Number of Beneficiaries"
          value={number_of_beneficiaries}
          name="number_of_beneficiaries"
          handleChange={handleChange}
        />
        <QASelectInput
          title="Level of Education"
          value={level_of_education}
          name="level_of_education"
          handleChange={handleChange}
          options={educationOptions}
        />
        <QATextInput
          title="Preferred Language"
          value={preferred_language}
          name="preferred_language"
          handleChange={handleChange}
        />
        <QATextInput
          title="Disability"
          value={disability}
          name="disability"
          handleChange={handleChange}
        />
      </SimpleGrid>
      <Flex justifyContent="flex-end">
        <Button rightIcon={<MdArrowForward />} type="submit" mt="2rem">
          Save and Continue
        </Button>
      </Flex>
    </Box>
  );
}

export default CaseFilesForm;
