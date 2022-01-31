import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";
import { Heading } from "@chakra-ui/react";
import TextInput from "../../common/TextInput";
import { AddIcon } from "@chakra-ui/icons";
import { createComplaint } from "../../../store/reducers/clv";
import Date from "../../common/Date";
import SelectInput from '../../common/SelectInput';
import { statusOptions } from "../../../defaultData/menu/options";

function ClvComplaintForm() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.clv);
  const { values, handleChange } = useForm({
    submittedBy: "",
    body: "",
    subject: "",
    status: "",
    dueDate: "",
  });
  const { submittedBy, body, subject, status, dueDate } = values;

  const isDisabled = !(submittedBy && body && subject && status && dueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(createComplaint(values));
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="1rem">
        File a Complaint
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem colSpan={2}>
          <TextInput
            placeholder="Full Name"
            name="submittedBy"
            value={submittedBy}
            handleChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <TextInput
            placeholder="Complaint Subject"
            name="subject"
            value={subject}
            handleChange={handleChange}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <TextInput
            placeholder="Complaint Body"
            name="body"
            value={body}
            handleChange={handleChange}
          />
        </GridItem>
        <Date
          placeholder="Due Date"
          name="dueDate"
          value={dueDate}
          onChange={handleChange}
        />
        <SelectInput
          options={statusOptions}
          placeholder="Status"
          name="status"
          value={status}
          handleChange={handleChange}
        />
      </Grid>
      <Button
        leftIcon={<AddIcon />}
        isDisabled={isDisabled}
        isLoading={loading}
        type="submit"
        color="white"
        bgColor="purple.500"
        borderRadius="full"
        mt="1.5rem"
        _hover={{ bgColor: "purple.800" }}
      >
        Add Complaint
      </Button>
    </Box>
  );
}

export default ClvComplaintForm;
