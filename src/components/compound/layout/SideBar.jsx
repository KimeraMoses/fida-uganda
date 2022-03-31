import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import menu from "../../../assets/menu";
import image from "../../../assets/images/FIDA_Wave.png";
import List from "./List";

const SideBar = () => {
  const { designation } = useSelector((state) => state.auth.user);

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
      <Box
        p={5}
        bgColor="white"
        borderRadius="xl"
        opacity="0.95"
        h="100%"
        overflow="auto"
      >
        <List items={menu[designation] || menu.other} />
      </Box>
    </Box>
  );
};

export default SideBar;
