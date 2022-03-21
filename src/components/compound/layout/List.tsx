import { useState } from "react";
import { List as ChakraList } from "@chakra-ui/react";
import ListItem from "./ListItem";
import { IListItem } from "../../../interfaces/UI";

type Props = {
  items: IListItem[];
};

const List = ({ items }: Props) => {
  const [selected, setSelected] = useState("");

  return (
    <ChakraList>
      {items.map((item) => (
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
