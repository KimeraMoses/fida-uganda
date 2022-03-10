import { Box, Flex } from "@chakra-ui/react";
import AppHeader from "./AppHeader";
import MainMenu from "./MainMenu";
import SectionHeader from "./SectionHeader";
import styles from "../styles/Layout.module.css";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <AppHeader />
      <Flex>
        <MainMenu />
        <Box p={5} width="75%" className={styles.backgroundImage}>
          <SectionHeader title={title} />
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
