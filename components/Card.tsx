import { Heading, Icon, Flex, As } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

type Props = {
  title: string;
  icon: As<any> | undefined;
  stat: number | string;
};

const Card = ({ title, icon, stat }: Props) => {
  return (
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
    >
      <Flex mb={14} justifyContent="space-between">
        <Heading fontSize="md">Travel Order</Heading>
        <Icon as={MdSettings} w={6} h={6} />
      </Flex>

      <Heading alignSelf="end">5</Heading>
    </Flex>
  );
};

export default Card;
