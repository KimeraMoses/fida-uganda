import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Stat, StatLabel, StatNumber, Flex } from "@chakra-ui/react";

function StatCard() {
  return (
    <Stat
      bgGradient="linear(to-br, purple.50, purple.100)"
      borderColor="purple.100"
      borderWidth="1px"
      px="1.6rem"
      py="0.5rem"
      borderRadius="2xl"
      boxShadow="lg"
    >
      <Flex alignItems="center" justifyContent="space-between" mb="2rem">
        <StatLabel fontSize="md" fontWeight="bold" color="purple.600">
          Collected Fees
        </StatLabel>
        <QuestionOutlineIcon color="purple.600" />
      </Flex>
      <StatNumber align="end" fontSize="5xl" color="purple.600">
        $0.00
      </StatNumber>
    </Stat>
  );
}

export default StatCard;