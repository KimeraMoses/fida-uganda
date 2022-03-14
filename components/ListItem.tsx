import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { ListItem as ChakraListItem, Text, Flex, Icon } from "@chakra-ui/react";
import ListItemInterface from "../interfaces/ListItem";

type Props = {
  onClick: Dispatch<SetStateAction<string>>;
  selected: string;
  item: ListItemInterface;
};

const ListItem = ({ onClick, selected, item }: Props) => {
  const isSelected = item.text === selected;
  const color = isSelected ? "purple.800" : "blackAlpha.700";
  const borderColor = isSelected ? "purple.800" : "white";

  return (
    <Link href={item.url} passHref>
      <ChakraListItem
        cursor="pointer"
        p={4}
        borderRadius="xl"
        _hover={{ bgColor: "purple.100" }}
        bgColor={isSelected ? "purple.100" : "transparent"}
        onClick={() => onClick(item.text)}
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
            {item.text}
          </Text>
        </Flex>
      </ChakraListItem>
    </Link>
  );
};

export default ListItem;
