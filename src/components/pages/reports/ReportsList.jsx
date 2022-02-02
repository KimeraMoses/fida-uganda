import { useSelector } from "react-redux";
import { List, Center, Heading } from "@chakra-ui/react";
import ListItemHeader from "../programs/ListItemHeader";
import ListItemNoLInk from "../programs/ListItemNoLInk";

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
      {reports.map((report, idx) => (
        <ListItemNoLInk
          key={report.id}
          bgColor={idx % 2 === 0 ? "white" : "purple.100"}
          name={report.id}
          lastModified={new Date(report.createdAt).toLocaleDateString()}
          createdBy={report.createdBy?.first_name}
        />
      ))}
    </List>
  );
}

export default ReportsList;
