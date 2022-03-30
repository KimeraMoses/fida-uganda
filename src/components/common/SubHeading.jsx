import { Heading } from "@chakra-ui/react";

const SubHeading = ({ title }) => {
  return (
    <Heading mt={10} mb={5} fontSize="2xl" color="purple.800" fontWeight="thin">
      {title}
    </Heading>
  );
};

export default SubHeading;
