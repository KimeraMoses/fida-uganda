import { useSelector } from "react-redux";
import { List, Center, Heading } from "@chakra-ui/react";
import ListItem from "../programs/ListItem";
import ListItemHeader from "../programs/ListItemHeader";

function ReportsList() {
  const { reports } = useSelector((state) => state.reports);

  if (!reports)
    return (
      <Center>
        <Heading as="h2" size="lg" color="purple.500">
          No reports found
        </Heading>
      </Center>
    );

  return (
    <List>
      <ListItemHeader />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </List>
  );
}

export default ReportsList;
