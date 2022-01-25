import { Box, Flex, ListItem } from "@chakra-ui/react";

function ListItemHeader() {
  return (
    <ListItem>
      <Flex
        align="center"
        justifyContent="space-between"
        p="1rem"
        bgColor="white"
        boxShadow="lg"
      >
        <Box fontSize="lg" fontWeight="semibold">Name</Box>
        <Box fontSize="lg" fontWeight="semibold">Created by</Box>
        <Box fontSize="lg" fontWeight="semibold">Last Modified</Box>
      </Flex>
    </ListItem>
  );
}

export default ListItemHeader;
