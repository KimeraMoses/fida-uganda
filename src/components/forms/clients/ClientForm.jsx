import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import {
  educationOptions,
  genderOptions,
  maritalStatusOptions,
} from "../../../defaultData/menu/options";
import useForm from "../../../hooks/useForm";
import QANumberInput from "../legalAid/QANumberInput";
import QASelectInput from "../legalAid/QASelectInput";
import QATextInput from "../legalAid/QATextInput";
import { AddIcon } from "@chakra-ui/icons";
import { createClient } from "../../../store/reducers/clients";

function ClientForm({ onClose }) {
  const dispatch = useDispatch();
  const { districts, counties, loading } = useSelector(
    (state) => state.registration
  );
  const { values, handleChange } = useForm({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    values.phoneNumber = phoneNumber.toString();
    dispatch(createClient(values));
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="2rem">
        Client Registration Form
      </Heading>
      <SimpleGrid columns={2} spacing={4} my="4">
        <Heading fontSize="md">Bio Data</Heading>
        <Heading fontSize="md">Complainant/Client</Heading>
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
      <Button
        leftIcon={<AddIcon color="white" />}
        isLoading={loading}
        type="submit"
        color="white"
        bgColor="purple.500"
        borderRadius="full"
        mt="1.5rem"
        _hover={{ bgColor: "purple.800" }}
      >
        Add Client
      </Button>
    </Box>
  );
}

export default ClientForm;
