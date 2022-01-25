import { List } from "@chakra-ui/react";
import React from "react";
import ListItem from "./ListItem";
import ListItemHeader from "./ListItemHeader";

function ProjectList() {
  return (
    <List width="100%" mt="2rem">
      <ListItemHeader />
      <ListItem />
      <ListItem bgColor="white" />
      <ListItem />
    </List>
  );
}

export default ProjectList;
