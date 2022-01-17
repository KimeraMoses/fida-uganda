import { useDispatch } from "react-redux";
import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";
import TextInput from "../../common/TextInput";
import { createTask } from "../../../store/reducers/tasks";

function CreateTask() {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    title: "",
    description: "",
    endDate: "",
    startDate: "",
  });

  const { title, description, endDate, startDate } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(values));
  };

  return (
    <SimpleGrid column={1} as="form" onSubmit={handleSubmit}>
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
      <SimpleGrid column={2}>
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
      </SimpleGrid>
      <Box>
        <Button type="submit">Add Task</Button>
      </Box>
    </SimpleGrid>
  );
}

export default CreateTask;
