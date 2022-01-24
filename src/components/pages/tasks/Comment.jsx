import { Flex, Avatar, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Comment({ comment }) {
  const { first_name, last_name, image } = comment.createdBy;
  const { user } = useSelector((state) => state.auth);

  let firstName = first_name;
  let lastName = last_name;
  let imageUrl = image;

  if (!first_name) {
    firstName = user.first_name;
    lastName = user.last_name;
    imageUrl = user.image;
  }

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
        <Avatar src={imageUrl} alt={firstName} size="sm" />
        <Flex flexDir="column" ml={4}>
          <Heading color="purple.600" fontSize="md">
            {`${firstName} ${lastName}`}
          </Heading>
          <Text color="gray.600" fontSize="sm" fontWeight="bold">
            {comment.designation}
          </Text>
        </Flex>
      </Flex>
      <Text fontSize="sm">{comment.body}</Text>
    </Flex>
  );
}

export default Comment;
