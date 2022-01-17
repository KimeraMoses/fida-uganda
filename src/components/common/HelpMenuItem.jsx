import { List } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

function HelpMenuItem({ selectedOption, setSelectedOption }) {
  return (
    <List>
      <MenuItem
        key="help"
        item={{ name: "Help", path: "/help" }}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </List>
  );
}

export default HelpMenuItem;
