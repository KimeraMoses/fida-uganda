import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import useForm from "../../../hooks/useForm";
import { addBio } from "../../../store/reducers/cases";
import ComplaintRespondentInput from "./ComplaintRespondentInput";

function CaseFilesForm({ setCurrentForm }) {
  const dispatch = useDispatch();
  const { bio } = useSelector((state) => state.cases.newCase);
  const { values, handleChange } = useForm({
    complainantName: bio.complainantName || "",
    respondentName: bio.respondentName || "",
    complainantSex: bio.complainantSex || "",
    respondentSex: bio.respondentSex || "",
    complainantAge: bio.complainantAge || "",
    respondentAge: bio.respondentAge || "",
    complainantCountry: bio.complainantCountry || "",
    respondentCountry: bio.respondentCountry || "",
    complainantDistrict: bio.complainantDistrict || "",
    respondentDistrict: bio.respondentDistrict || "",
    complainantCounty: bio.complainantCounty || "",
    respondentCounty: bio.respondentCounty || "",
    complainantParish: bio.complainantParish || "",
    respondentParish: bio.respondentParish || "",
    complainantVillage: bio.complainantVillage || "",
    respondentVillage: bio.respondentVillage || "",
    complainantPhone: bio.complainantPhone || "",
    respondentPhone: bio.respondentPhone || "",
    complainantMaritalStatus: bio.complainantMaritalStatus || "",
    respondentMaritalStatus: bio.respondentMaritalStatus || "",
    complainantAccompaniedBy: bio.complainantAccompaniedBy || "",
    respondentAccompaniedBy: bio.respondentAccompaniedBy || "",
    complainantNumberOfBeneficiaries:
      bio.complainantNumberOfBeneficiaries || "",
    respondentNumberOfBeneficiaries: bio.respondentNumberOfBeneficiaries || "",
    complainantJob: bio.complainantJob || "",
    respondentJob: bio.respondentJob || "",
    complainantPlaceOfWork: bio.complainantPlaceOfWork || "",
    respondentPlaceOfWork: bio.respondentPlaceOfWork || "",
    complainantLevelOfEducation: bio.complainantLevelOfEducation || "",
    respondentLevelOfEducation: bio.respondentLevelOfEducation || "",
    complainantLanguage: bio.complainantLanguage || "",
    respondentLanguage: bio.respondentLanguage || "",
    complainantRelation: bio.complainantRelation || "",
    respondentRelation: bio.respondentRelation || "",
    complainantDisability: bio.complainantDisability || "",
    respondentDisability: bio.respondentDisability || "",
  });

  const {
    complainantName,
    respondentName,
    complainantSex,
    respondentSex,
    complainantAge,
    respondentAge,
    complainantCountry,
    respondentCountry,
    complainantDistrict,
    respondentDistrict,
    complainantCounty,
    respondentCounty,
    complainantParish,
    respondentParish,
    complainantVillage,
    respondentVillage,
    complainantPhone,
    respondentPhone,
    complainantMaritalStatus,
    respondentMaritalStatus,
    complainantAccompaniedBy,
    respondentAccompaniedBy,
    complainantNumberOfBeneficiaries,
    respondentNumberOfBeneficiaries,
    complainantJob,
    respondentJob,
    complainantPlaceOfWork,
    respondentPlaceOfWork,
    complainantLevelOfEducation,
    respondentLevelOfEducation,
    complainantLanguage,
    respondentLanguage,
    complainantRelation,
    respondentRelation,
    complainantDisability,
    respondentDisability,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="2rem">
        Case Registration Form
      </Heading>
      <Heading fontSize="xl" mb="3rem">
        1. Personal Information
      </Heading>
      <SimpleGrid columns={3} spacing={4} my="4">
        <Heading fontSize="md">Bio Data</Heading>
        <Heading fontSize="md">Complainant</Heading>
        <Heading fontSize="md">Respondent</Heading>
        <ComplaintRespondentInput
          name="Name"
          value1={complainantName}
          value2={respondentName}
          name1="complainantName"
          name2="respondentName"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Sex"
          value1={complainantSex}
          value2={respondentSex}
          name1="complainantSex"
          name2="respondentSex"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Age"
          value1={complainantAge}
          value2={respondentAge}
          name1="complainantAge"
          name2="respondentAge"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Country"
          value1={complainantCountry}
          value2={respondentCountry}
          name1="complainantCountry"
          name2="respondentCountry"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="District"
          value1={complainantDistrict}
          value2={respondentDistrict}
          name1="complainantDistrict"
          name2="respondentDistrict"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="County"
          value1={complainantCounty}
          value2={respondentCounty}
          name1="complainantCounty"
          name2="respondentCounty"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Parish"
          value1={complainantParish}
          value2={respondentParish}
          name1="complainantParish"
          name2="respondentParish"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Village"
          value1={complainantVillage}
          value2={respondentVillage}
          name1="complainantVillage"
          name2="respondentVillage"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Phone"
          value1={complainantPhone}
          value2={respondentPhone}
          name1="complainantPhone"
          name2="respondentPhone"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Marital Status"
          value1={complainantMaritalStatus}
          value2={respondentMaritalStatus}
          name1="complainantMaritalStatus"
          name2="respondentMaritalStatus"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Accompanied By"
          value1={complainantAccompaniedBy}
          value2={respondentAccompaniedBy}
          name1="complainantAccompaniedBy"
          name2="respondentAccompaniedBy"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Number of Beneficiaries"
          value1={complainantNumberOfBeneficiaries}
          value2={respondentNumberOfBeneficiaries}
          name1="complainantNumberOfBeneficiaries"
          name2="respondentNumberOfBeneficiaries"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Job"
          value1={complainantJob}
          value2={respondentJob}
          name1="complainantJob"
          name2="respondentJob"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Place of Work"
          value1={complainantPlaceOfWork}
          value2={respondentPlaceOfWork}
          name1="complainantPlaceOfWork"
          name2="respondentPlaceOfWork"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Level of Education"
          value1={complainantLevelOfEducation}
          value2={respondentLevelOfEducation}
          name1="complainantLevelOfEducation"
          name2="respondentLevelOfEducation"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Language"
          value1={complainantLanguage}
          value2={respondentLanguage}
          name1="complainantLanguage"
          name2="respondentLanguage"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Relation"
          value1={complainantRelation}
          value2={respondentRelation}
          name1="complainantRelation"
          name2="respondentRelation"
          handleChange={handleChange}
        />
        <ComplaintRespondentInput
          name="Disability"
          value1={complainantDisability}
          value2={respondentDisability}
          name1="complainantDisability"
          name2="respondentDisability"
          handleChange={handleChange}
        />
      </SimpleGrid>
      <Flex justifyContent="flex-end">
        <Button
          rightIcon={<MdArrowForward />}
          type="submit"
          variantColor="teal"
          mt="2rem"
          onClick={(e) => {
            dispatch(addBio(values));
            setCurrentForm(2);
          }}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default CaseFilesForm;
