import {
  Box,
  Flex,
  ListIcon,
  ListItem as ChakraListItem,
} from "@chakra-ui/react";
import { MdOutlineFolderOpen } from "react-icons/md";

function ListItem({ bgColor = "purple.100" }) {
  return (
    <ChakraListItem p="1rem" bgColor={bgColor} cursor="pointer">
      <Flex alignItems="center">
        <ListIcon as={MdOutlineFolderOpen} size="24rem" />
        <Flex alignItems="center" justifyContent="space-between" flex="auto">
          <Box as="span" fontSize="lg">
            Project Name
          </Box>
          <Box as="span" fontSize="lg">
            Created by
          </Box>
          <Box as="span" fontSize="lg">
            Last Modified
          </Box>
        </Flex>
      </Flex>
    </ChakraListItem>
  );
}

export default ListItem;
