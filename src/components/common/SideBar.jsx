import { Box } from "@chakra-ui/react";
import { useState } from "react";
import HelpMenuItem from "./HelpMenuItem";
import Logo from "./Logo";
import Menu from "./Menu";

function SideBar() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <Box
      width="25%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap="4rem"
      p="1rem"
      h="100vh"
      boxShadow="md"
    >
      <Logo size={100} />
      <Menu
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <HelpMenuItem
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </Box>
  );
}

export default SideBar;
