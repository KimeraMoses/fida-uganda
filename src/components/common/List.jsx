import { List as ChakraList } from "@chakra-ui/react";
import { ListItem } from "./ListItem";

function List({ data }) {
  return (
    <ChakraList>
      {data.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ChakraList>
  );
}

export default List;
