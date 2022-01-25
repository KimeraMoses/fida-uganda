import { MdOutlineFolderOpen } from "react-icons/md";
import {
  Box,
  Flex,
  ListIcon,
  ListItem as ChakraListItem,
} from "@chakra-ui/react";

function ListItemNoLInk({ name, bgColor, createdBy, lastModified }) {
  return (
    <ChakraListItem p="1rem" bgColor={bgColor} cursor="pointer">
      <Flex alignItems="center">
        <ListIcon as={MdOutlineFolderOpen} size="24rem" />
        <Flex alignItems="center" justifyContent="space-between" flex="auto">
          <Box as="span" fontSize="lg">
            {name || "Project Name"}
          </Box>
          <Box as="span" fontSize="lg">
            {createdBy || "Created by"}
          </Box>
          <Box as="span" fontSize="lg">
            {lastModified || "Last Modified"}
          </Box>
        </Flex>
      </Flex>
    </ChakraListItem>
  );
}

export default ListItemNoLInk;
