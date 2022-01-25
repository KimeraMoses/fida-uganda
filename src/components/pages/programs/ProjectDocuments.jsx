import { List } from "@chakra-ui/react";
import React from "react";
import BreadCrump from "./BreadCrump";
import ListItem from "./ListItem";
import ListItemHeader from "./ListItemHeader";

function ProjectDocuments() {
  return (
    <>
      <BreadCrump />
      <List mt="2rem">
        <ListItemHeader />
        <ListItem to="" />
        <ListItem to="" bgColor="white" />
        <ListItem to="" />
      </List>
    </>
  );
}

export default ProjectDocuments;
