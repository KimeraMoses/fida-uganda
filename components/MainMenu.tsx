import { Box } from "@chakra-ui/react";
import { menuItems } from "../assets/menu";
import List from "./List";
import styles from "../styles/MainMenu.module.css";

const MainMenu = () => {
  return (
    <Box
      p={5}
      width="25%"
      minH="100vh"
      bgColor="blackAlpha.50"
      className={styles.backgroundImage}
    >
      <Box p={5} bgColor="white" borderRadius="xl" opacity="0.95">
        <List items={menuItems} />
      </Box>
    </Box>
  );
};

export default MainMenu;
