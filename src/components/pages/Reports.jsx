import { Box } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import ReportsHeader from "./reports/ReportsHeader";
import ReportsList from "./reports/ReportsList";

function Reports() {
  return (
    <Box>
      <SectionHeader title="Reports" />
      <ReportsHeader />
      {/* <ReportsList /> */}
    </Box>
  );
}

export default Reports;
