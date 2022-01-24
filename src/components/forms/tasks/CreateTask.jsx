import { useDispatch } from "react-redux";
import {
  SimpleGrid,
  Box,
  Button,
  Heading,
  Flex,
  Text,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";
import TextInput from "../../common/TextInput";
import { createTask } from "../../../store/reducers/tasks";
import Chip from "../../common/Chip";
import { useSelector } from "react-redux";

function CreateTask({ onClose }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.tasks);
  const { values, handleChange } = useForm({
    title: "",
    description: "",
    endDate: "",
    startDate: "",
    tags: "",
    outlines: "",
  });

  const { title, description, endDate, startDate, tags, outlines } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    values.tags = tags ? tags.split(",") : [];
    values.outline = outlines ? outlines.split(",") : [];
    dispatch(createTask(values));
    while (loading) {}
    if (!error) {
      onClose();
    }
    if (error) {
      alert(error);
    }
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="1rem">
        Create Task
      </Heading>
      <SimpleGrid columns={1} spacing={4}>
        <TextInput
          value={title}
          handleChange={handleChange}
          name="title"
          placeholder="Task title"
        />
        <TextInput
          value={description}
          handleChange={handleChange}
          name="description"
          placeholder="Task description"
        />
        <Flex gap={2}>
          <TextInput
            value={startDate}
            handleChange={handleChange}
            name="startDate"
            placeholder="Start Date"
          />
          <TextInput
            value={endDate}
            handleChange={handleChange}
            name="endDate"
            placeholder="End Date"
          />
        </Flex>
        <Heading fontSize="md" mt="1rem">
          Add Tags
        </Heading>
        <Flex gap="0.5rem">
          {tags &&
            tags
              .split(",")
              .map((tag, idx) => (
                <Chip key={idx} text={tag} bgColor="pink.200" />
              ))}
        </Flex>
        <TextInput
          value={tags}
          handleChange={handleChange}
          name="tags"
          placeholder="Tags"
        />
        <Text mt="0">
          Tags should be separated by commas e.g{" "}
          <Box as="strong">legal aid, court case, clv</Box>
        </Text>
        <Heading fontSize="md" mt="1rem">
          Add Outlines
        </Heading>
        {outlines && (
          <OrderedList
            gap="0.5rem"
            as="ol"
            bgColor="purple.100"
            p="1rem"
            pl="3rem"
            borderRadius="1rem"
          >
            {outlines &&
              outlines.split(",").map((outline, idx) => (
                <ListItem key={idx} fontWeight="bold">
                  {outline}
                </ListItem>
              ))}
          </OrderedList>
        )}
        <TextInput
          value={outlines}
          handleChange={handleChange}
          name="outlines"
          placeholder="Outlines"
        />
        <Text mt="0">
          Outlines should be separated by commas e.g{" "}
          <Box as="strong">collect all data, make payments</Box>
        </Text>
      </SimpleGrid>
      <Flex my="2rem">
        <Button type="submit" isLoading={loading}>
          Add Task
        </Button>
      </Flex>
    </Box>
  );
}

export default CreateTask;
