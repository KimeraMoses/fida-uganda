import { Heading, Icon, Flex, Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { MdOutlineMessage } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import TaskBadges from "../compound/Tasks/TaskBadges";
import UsersView from "./UsersView";

const TasksCard = ({ task }) => {
  return (
    <Flex
      p={5}
      boxShadow="lg"
      bgColor="white"
      borderRadius="xl"
      minW="20rem"
      color="purple.600"
      flexDir="column"
      cursor="pointer"
    >
      <TaskBadges tags={task.tags} />
      <Heading fontSize="md" color="black">
        {task.title}
      </Heading>
      <Text color="gray.500" noOfLines={2}>
        {task.description}
      </Text>

      <Flex justifyContent="space-between">
        <Flex gap={2} alignItems="center">
          {task.outline && (
            <Badge colorScheme="purple" rounded="full" px={3}>
              {task.outline[0]}
            </Badge>
          )}
          <Badge colorScheme="purple" rounded="full" px={3}>
            <Icon
              as={MdAttachFile}
              w={4}
              h={4}
              style={{ transform: "rotate(45deg)" }}
            />
            {task.files && task.files.length}
          </Badge>
          <Badge colorScheme="purple" rounded="full" px={3}>
            <Icon as={MdOutlineMessage} w={4} h={4} />
            {task.comments && task.comments.length}
          </Badge>
        </Flex>
        {task.team && <UsersView users={task.team} />}
      </Flex>
    </Flex>
  );
};

export default TasksCard;
