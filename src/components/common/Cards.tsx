import { HStack } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Cards = ({ children }: Props) => {
  return <HStack spacing={10}>{children}</HStack>;
};

export default Cards;
