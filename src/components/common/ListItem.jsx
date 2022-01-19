import { ListItem as ChakraListItem, ListIcon } from "@chakra-ui/react";
import { MdFolder } from "react-icons/md";

function ListItem({ content, icon, handleItemClick }) {
  return (
    <ChakraListItem onClick={handleItemClick}>
      <ListIcon as={icon || MdFolder} color="green.500" />
      {content}
    </ChakraListItem>
  );
}

export default ListItem;
