import { useState } from "react";
import { List as ChakraList } from "@chakra-ui/react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  const [selected, setSelected] = useState("");

  return (
    <ChakraList>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onClick={setSelected}
          selected={selected}
        />
      ))}
    </ChakraList>
  );
};

export default List;
