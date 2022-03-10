import { Box } from "@chakra-ui/react";
import AppHeader from "./AppHeader";
import MainMenu from "./MainMenu";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      <MainMenu />
      <Box p={5} width="75%">
        {children}
      </Box>
    </>
  );
};

export default Layout;
