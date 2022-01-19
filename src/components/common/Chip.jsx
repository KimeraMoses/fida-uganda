import { Flex, Icon, Text } from "@chakra-ui/react";

function Chip({ text, bgColor, icon }) {
  if (!text) {
    return null;
  }
  return (
    <Flex
      bgColor={bgColor}
      fontWeight="bold"
      borderRadius="full"
      py="0.25rem"
      px="0.5rem"
      gap="2"
    >
      {icon && <Icon as={icon} />}
      <Text color="gray.800" fontSize="xs">
        {text}
      </Text>
    </Flex>
  );
}

export default Chip;
