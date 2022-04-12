import React from "react";
import { List, ListItem } from "@chakra-ui/react";
import { MdOutlineHelpOutline } from "react-icons/md";

const HelpButton = () => {
  return (
    <List
      style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
    >
      <ListItem
        mb={2}
        cursor="pointer"
        p={2}
        borderRadius="xl"
        _hover="purple.100"
        bgColor="transparent"
        color="purple.800"
        // onClick={() => navigate('/')}
        borderWidth="1px"
        borderColor="purple.800"
        width="80%"
        height="100%"
        style={{
          textAlign: "center",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none"
        }}
      >
        <MdOutlineHelpOutline style={{ marginRight: "4px" }} /> Help
      </ListItem>
    </List>
  );
};
export default HelpButton;
