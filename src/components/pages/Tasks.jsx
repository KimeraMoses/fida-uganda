import { Box, Button, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../common/GenericModal";
import SectionHeader from "../common/SectionHeader";
import CreateTask from "../forms/tasks/CreateTask";
import TodoContainer from "./tasks/TodoContainer";

function Tasks() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <SectionHeader title="Tasks" />
      <Button
        bgColor="purple.500"
        color="white"
        mt="3rem"
        mb="1rem"
        _hover={{ bgColor: "purple.600" }}
        onClick={onOpen}
      >
        Add Task
      </Button>
      <TodoContainer />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <CreateTask onClose={onClose} />
      </GenericModal>
    </Box>
  );
}

export default Tasks;
