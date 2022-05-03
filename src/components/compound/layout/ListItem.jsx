import { NavLink } from "react-router-dom";
import { Text, Icon } from "@chakra-ui/react";
import classes from "./styles.module.css";

const ListItem = ({ onClick, selected, item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        classes.link_item + " " + (isActive ? classes.active__link : "")
      }
    >
      <Icon as={item.icon} w={6} h={6} />
      <Text fontSize="xl">{item.name}</Text>
    </NavLink>
  );
};

export default ListItem;
