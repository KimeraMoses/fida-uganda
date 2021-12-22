import { useState } from "react";
import { useSelector } from "react-redux";
import { Help } from "@mui/icons-material";
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import usersMenu from "../../defaultData/menu";

function SideMenu() {
  const { designation } = useSelector((state) => state.auth.user);
  const [isSelected, setIsSelected] = useState(1);

  const handleIsSelected = (id) => {
    setIsSelected(id);
  };

  return (
    <>
      <MenuList>
        {usersMenu[designation].map(({ id, name, icon }) => (
          <MenuItem
            key={id}
            selected={id === isSelected}
            onClick={(e) => handleIsSelected(id)}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{name}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Help />
        </ListItemIcon>
        <ListItemText>Help</ListItemText>
      </MenuItem>
    </>
  );
}

export default SideMenu;
