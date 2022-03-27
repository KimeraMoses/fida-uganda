import { HStack } from "@chakra-ui/react";

const Cards = ({ children }) => {
  return <HStack spacing={10}>{children}</HStack>;
};

export default Cards;
