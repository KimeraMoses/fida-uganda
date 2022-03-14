import { Heading } from "@chakra-ui/react";

type Props = {
  title?: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <Heading color="purple.800" fontSize="4xl" mb={5}>
      {title}
    </Heading>
  );
};

export default SectionHeader;
