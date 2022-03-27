import { Box } from "@chakra-ui/react";
import menu from "../../../assets/menu";
import image from "../../../assets/images/FIDA_Wave.png";
import List from "./List";
import { useGetMe } from "../../../hooks/useUser";

const SideBar = () => {
  const { data } = useGetMe();
  let currentMenu = menu.other;

  if (data?.user) {
    const designation = data.user.designation;
    currentMenu = menu[designation];
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
