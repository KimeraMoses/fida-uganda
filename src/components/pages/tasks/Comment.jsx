import { Flex, Avatar, Heading, Text } from "@chakra-ui/react";

function Comment({ comment }) {
  return (
    <Flex
      flexDir="column"
      border="1px"
      borderColor="purple.200"
      bgColor="purple.100"
      borderRadius="lg"
      p="3"
      mb="2"
    >
      <Flex alignItems="center" mb="2">
        <Avatar src={comment.image} alt={comment.name} size="sm" />
        <Flex flexDir="column" ml={4}>
          <Heading color="purple.600" fontSize="md">
            {comment.name}
          </Heading>
          <Text color="gray.600" fontSize="sm" fontWeight="bold">
            {comment.designation}
          </Text>
        </Flex>
      </Flex>
      <Text fontSize="sm">{comment.comment}</Text>
    </Flex>
  );
}

export default Comment;
