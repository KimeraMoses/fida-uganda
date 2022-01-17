import { useState } from "react";
import { Flex, IconButton, Text, Heading } from "@chakra-ui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Team from "./Team";
import Tags from "./Tags";
import TodoSummary from "./TodoSummary";
import Comments from "./Comments";

function Todo({ todo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      flexDir="column"
      bgColor="white"
      p="1rem"
      boxShadow="lg"
      borderRadius="md"
      maxW="30rem"
    >
      <Flex gap="1.5" alignItems="center">
        <Tags tags={todo.tags} />
        {isOpen ? (
          <IconButton
            icon={<IoIosArrowDropup size={24} />}
            variant="ghost"
            color="purple.700"
            marginLeft="auto"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <IconButton
            icon={<IoIosArrowDropdown size={24} />}
            variant="ghost"
            color="purple.700"
            marginLeft="auto"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </Flex>
      <Heading size="sm" my="2">
        {todo.title}
      </Heading>
      <Text fontSize="md" color="gray" mb="2" noOfLines={isOpen ? null : 2}>
        {todo.description}
      </Text>
      <Flex gap="1.5" alignItems="center">
        {!isOpen ? <TodoSummary /> : null}
      </Flex>
      {isOpen ? <Team /> : null}
      {isOpen ? <Comments id={todo.id} /> : null}
    </Flex>
  );
}

export default Todo;
