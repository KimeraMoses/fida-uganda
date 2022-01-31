import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Heading, Divider, Button } from "@chakra-ui/react";
import TextInput from "../../common/TextInput";
import EmailInput from "../../common/EmailInput";
import useForm from "../../../hooks/useForm";
import { AddIcon } from "@chakra-ui/icons";
import { createClv } from "../../../store/reducers/clv";
import NumberInput from "../../common/NumberInput";

function ClvProfilingForm({ onClose }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.clv);
  const { values, handleChange } = useForm({
    firstName: "",
    maidenName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    city: "",
    subCountry: "",
    village: "",
    profession: "",
    yearOfTraining: "",
    projectOfAttachment: "",
    categoryOfTrainingAttended: "",
  });

  const {
    firstName,
    maidenName,
    lastName,
    mobileNumber,
    email,
    city,
    subCountry,
    village,
    profession,
    yearOfTraining,
    projectOfAttachment,
    categoryOfTrainingAttended,
  } = values;

  const isDisabled = !(firstName && email && profession && city);

  const handleSubmit = (e) => {
    e.preventDefault();
    values.name = `${firstName} ${maidenName} ${lastName}`;
    dispatch(createClv(values));
    onClose();
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg">CLV Profiling Form</Heading>
      <Heading mt="1rem" size="sm" fontWeight="bold" mb="3">
        Personal Information
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <TextInput
          placeholder="First Name"
          name="firstName"
          value={firstName}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Maiden Name"
          name="maidenName"
          value={maidenName}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          handleChange={handleChange}
        />
      </Grid>
      <Heading mt="1rem" size="sm" fontWeight="bold" mb="3">
        Personal Address
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <NumberInput
          placeholder="Mobile Number"
          name="mobileNumber"
          value={mobileNumber}
          handleChange={handleChange}
        />
        <EmailInput
          placeholder="Email"
          name="email"
          value={email}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="District/City"
          name="city"
          value={city}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Sub Country"
          name="subCountry"
          value={subCountry}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Village"
          name="village"
          value={village}
          handleChange={handleChange}
        />
      </Grid>
      <Divider color="gray.400" my={3} />
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <TextInput
          placeholder="Profession"
          name="profession"
          value={profession}
          handleChange={handleChange}
        />
        <NumberInput
          placeholder="Year of Training"
          name="yearOfTraining"
          value={yearOfTraining}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Project of Attachment"
          name="projectOfAttachment"
          value={projectOfAttachment}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Category of Training Attended"
          name="categoryOfTrainingAttended"
          value={categoryOfTrainingAttended}
          handleChange={handleChange}
        />
      </Grid>
      <Button
        leftIcon={<AddIcon color="white" />}
        isLoading={loading}
        type="submit"
        color="white"
        bgColor="purple.500"
        borderRadius="full"
        mt="1.5rem"
        _hover={{ bgColor: "purple.800" }}
        isDisabled={isDisabled}
      >
        Add CLV
      </Button>
    </Box>
  );
}

export default ClvProfilingForm;
