import { Heading } from "@chakra-ui/react";

const SectionHeader = ({ title }) => {
  return (
    <Heading color="purple.800" fontSize="4xl" mb={5}>
      {title}
    </Heading>
  );
};

export default SectionHeader;
