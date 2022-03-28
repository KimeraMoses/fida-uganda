import { Box, Flex, Heading } from "@chakra-ui/react";
import TasksCard from "../../common/TasksCard";
import { MdAdd } from "react-icons/md";

const IncomingTasks = ({ tasks }) => {
  return (
    <Box overflowX="auto" p={3}>
      <Flex gap={5}>
        <>
          <Flex
            p={5}
            boxShadow="lg"
            bgColor="white"
            borderRadius="xl"
            minW="20rem"
            color="purple.600"
            flexDir="column"
            cursor="pointer"
            onClick={() => {}}
          >
            <MdAdd />
            <Heading fontSize="md" color="black">
              Create New Task
            </Heading>
          </Flex>
          {tasks &&
            tasks.map((task) => {
              if (task.status === "todo") {
                return <TasksCard key={task.id} task={task} />;
              }
              return null;
            })}
        </>
      </Flex>
    </Box>
  );
};

export default IncomingTasks;
