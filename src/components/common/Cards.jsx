import { SimpleGrid } from "@chakra-ui/react";

const Cards = ({ children }) => {
  return (
    <SimpleGrid columns={4} gap={10}>
      {children}
    </SimpleGrid>
  );
};

export default Cards;
