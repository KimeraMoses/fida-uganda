import { List } from "@chakra-ui/react";
import BreadCrump from "./BreadCrump";
import ListItem from "./ListItem";
import ListItemHeader from "./ListItemHeader";

function ProjectDetails() {
  return (
    <>
      <BreadCrump />
      <List width="100%" mt="2rem">
        <ListItemHeader />
        <ListItem to="documents" name="Project Documents" />
        <ListItem to="progress" name="Project Progress" bgColor="white" />
        <ListItem to="logframe" name="Project Logframe" />
      </List>
    </>
  );
}

export default ProjectDetails;
