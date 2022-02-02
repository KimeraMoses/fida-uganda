import { List } from "@chakra-ui/react";
import ListItem from "../programs/ListItem";
import ListItemHeader from "../programs/ListItemHeader";

function ReportsList() {
  return (
    <>
      <List>
        <ListItemHeader />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </>
  );
}

export default ReportsList;
