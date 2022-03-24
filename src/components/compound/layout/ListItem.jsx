import { Link } from "react-router-dom";
import { ListItem as ChakraListItem, Text, Flex, Icon } from "@chakra-ui/react";

const ListItem = ({ onClick, selected, item }) => {
  const isSelected = item.name === selected;
  const color = isSelected ? "purple.800" : "blackAlpha.700";
  const borderColor = isSelected ? "purple.800" : "white";

  return (
    <Link to={item.path}>
      <ChakraListItem
        mb={2}
        cursor="pointer"
        p={4}
        borderRadius="xl"
        _hover={{ bgColor: "purple.100" }}
        bgColor={isSelected ? "purple.100" : "transparent"}
        onClick={() => onClick(item.name)}
        borderWidth="1px"
        borderColor={borderColor}
        width="100%"
        height="100%"
      >
        <Flex alignItems="center" gap={3}>
          <Icon as={item.icon} w={6} h={6} color={color} />
          <Text
            fontWeight={isSelected ? "bold" : "normal"}
            fontSize="xl"
            color={color}
          >
            {item.name}
          </Text>
        </Flex>
      </ChakraListItem>
    </Link>
  );
};

export default ListItem;
