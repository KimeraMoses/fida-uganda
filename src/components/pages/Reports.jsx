import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadReports } from "../../store/reducers/reports";
import SectionHeader from "../common/SectionHeader";
import ReportsHeader from "./reports/ReportsHeader";
import ReportsList from "./reports/ReportsList";

function Reports() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReports());
  }, [dispatch]);

  return (
    <Box>
      <SectionHeader title="Reports" />
      <ReportsHeader />
      <ReportsList />
    </Box>
  );
}

export default Reports;
