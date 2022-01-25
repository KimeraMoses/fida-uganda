import { MdOutlineFolderOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  ListIcon,
  ListItem as ChakraListItem,
} from "@chakra-ui/react";

function ListItem({
  to,
  name,
  createdBy,
  lastModified,
  bgColor = "purple.100",
}) {
  return (
    <Link to={to}>
      <ChakraListItem p="1rem" bgColor={bgColor} cursor="pointer">
        <Flex alignItems="center">
          <ListIcon as={MdOutlineFolderOpen} size="24rem" />
          <Flex justifyContent="space-between" flex="auto">
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
    </Link>
  );
}

export default ListItem;
