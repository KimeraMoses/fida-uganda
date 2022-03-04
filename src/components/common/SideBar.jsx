import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { scrollbar } from "../../defaultData/theme";
import Logo from "./Logo";
import Menu from "./Menu";

function SideBar() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <Box
      width="25%"
      display="flex"
      flexDirection="column"
      gap="4rem"
      p="1rem"
      h="100vh"
      overflowY="auto"
      boxShadow="md"
      css={scrollbar}
    >
      <Logo size={100} />
      <Menu
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </Box>
  );
}

export default SideBar;
