import { Flex } from "@chakra-ui/react";
import AppHeader from "./layout/AppHeader";
import SideBar from "./layout/SideBar";
import Main from "./layout/Main";

const Layout = ({ children }) => {
  return (
    <Flex h="100vh" flexDir="column">
      <AppHeader />
      <Flex flex="auto" overflowY="auto">
        <SideBar />
        <Main>{children}</Main>
      </Flex>
    </Flex>
  );
};

export default Layout;
