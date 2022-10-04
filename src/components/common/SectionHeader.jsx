import { Heading } from "@chakra-ui/react";

const SectionHeader = ({ title }) => {
  return (
    <Heading color="purple.800" fontSize="3xl" mb={5} mt={5} noOfLines={1}>
      {title}
    </Heading>
  );
};

export default SectionHeader;
