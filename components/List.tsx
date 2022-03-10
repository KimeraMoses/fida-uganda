import { useState } from "react";
import { List as ChakraList } from "@chakra-ui/react";
import ListItem from "./ListItem";
import ListItemInterface from "../interfaces/ListItem";

type Props = {
  items: ListItemInterface[];
};

const List = ({ items }: Props) => {
  const [selected, setSelected] = useState("");

  return (
    <ChakraList spacing={2}>
      {items.map((item) => (
        <ListItem
          key={item.url}
          item={item}
          onClick={setSelected}
          selected={selected}
        />
      ))}
    </ChakraList>
  );
};

export default List;
