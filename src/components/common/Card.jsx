import { Link } from "react-router-dom";
import { Heading, Icon, Flex } from "@chakra-ui/react";

const Card = ({ title, icon, stat, to }) => {
  if (to) {
    return (
      <Link to={to}>
        <Flex
          p={5}
          borderColor="purple.800"
          boxShadow="lg"
          bgColor="white"
          borderRadius="xl"
          h="10rem"
          bgGradient="linear(to-br, purple.50, purple.100)"
          color="purple.600"
          flexDir="column"
          cursor="pointer"
        >
          <Flex mb={14} justifyContent="space-between">
            <Heading fontSize="md">{title}</Heading>
            <Icon as={icon} w={6} h={6} />
          </Flex>

          <Heading alignSelf="end">{stat}</Heading>
        </Flex>
      </Link>
    );
  }
  return (
    <Flex
      p={5}
      borderColor="purple.800"
      boxShadow="lg"
      bgColor="white"
      borderRadius="xl"
      h="10rem"
      bgGradient="linear(to-br, purple.50, purple.100)"
      color="purple.600"
      flexDir="column"
    >
      <Flex mb={14} justifyContent="space-between">
        <Heading fontSize="md">{title}</Heading>
        <Icon as={icon} w={6} h={6} />
      </Flex>

      <Heading alignSelf="end">{stat}</Heading>
    </Flex>
  );
};

export default Card;
