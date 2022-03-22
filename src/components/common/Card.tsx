import { Link } from "react-router-dom";
import { Heading, Icon, Flex, As } from "@chakra-ui/react";

type Props = {
  to: string;
  title: string;
  icon: As<any> | undefined;
  stat: number | string;
};

const Card = ({ title, icon, stat, to }: Props) => {
  return (
    <Link to={to}>
      <Flex
        p={5}
        borderColor="purple.800"
        boxShadow="lg"
        bgColor="white"
        borderRadius="xl"
        minW="17rem"
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
};

export default Card;
