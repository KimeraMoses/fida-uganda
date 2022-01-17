import { Flex, ListItem, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MenuItem({ mt = "", selectedOption, setSelectedOption, item }) {
  const handleClick = () => {
    setSelectedOption(item.name);
  };

  return (
    <Link to={item.path}>
      <ListItem
        mt={mt}
        onClick={handleClick}
        as="li"
        borderRadius="lg"
        bgColor={selectedOption === item.name ? "purple.100" : "white"}
        p="5"
        mb="2"
        _hover={{ bgColor: "purple.100" }}
      >
        <Flex alignItems="center" gap="3">
          <Icon
            as={item.icon}
            boxSize="6"
            color={selectedOption === item.name ? "purple.800" : "gray.700"}
          />
          <Text
            fontSize="lg"
            color={selectedOption === item.name ? "purple.800" : "gray.700"}
            fontWeight="bold"
          >
            {item.name}
          </Text>
        </Flex>
      </ListItem>
    </Link>
  );
}

export default MenuItem;
