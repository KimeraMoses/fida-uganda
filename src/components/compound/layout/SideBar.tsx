import { Box } from "@chakra-ui/react";
import menu from "../../../assets/menu";
import image from "../../../assets/images/FIDA_Wave.png";
import List from "./List";
import { useGetMe } from "../../../hooks/useUser";
import { IListItem } from "../../../interfaces/UI";

const SideBar = () => {
  const { data } = useGetMe();
  let currentMenu: IListItem[] = [];

  if (data?.user) {
    const designation = data.user.designation;
    Object.keys(menu).forEach((key) => {
      if (designation === key) {
        currentMenu = menu[key];
      }
    });
  } else {
    currentMenu = menu.other;
  }

  return (
    <Box
      p={5}
      width="25%"
      h="100%"
      bgColor="blackAlpha.50"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box p={5} bgColor="white" borderRadius="xl" opacity="0.95" h="100%">
        <List items={currentMenu} />
      </Box>
    </Box>
  );
};

export default SideBar;
