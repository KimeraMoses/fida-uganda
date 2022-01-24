import { Flex, SimpleGrid } from "@chakra-ui/react";
import TodoList from "./TodoList";

function TodoSection() {
  return (
    <Flex flexDir="column">
      <SimpleGrid columns={2} spacing={4} alignItems="flex-start">
        <TodoList />
      </SimpleGrid>
    </Flex>
  );
}

export default TodoSection;
