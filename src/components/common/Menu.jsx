import { useSelector } from "react-redux";
import { List } from "@chakra-ui/react";
import menu from "../../defaultData/menu/menu";
import MenuItem from "./MenuItem";

function Menu({ selectedOption, setSelectedOption }) {
  const { designation } = useSelector((state) => state.auth.user);

  return (
    <List display="flex" flexDir="column">
      {menu[designation].map((item) => {
        return (
          <MenuItem
            key={item.name}
            item={item}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      })}
    </List>
  );
}

export default Menu;
