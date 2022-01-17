import { Box } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import TodoContainer from "./tasks/TodoContainer";

function Tasks() {
  return (
    <Box>
      <SectionHeader title="Tasks" />
      <TodoContainer />
    </Box>
  );
}

export default Tasks;
