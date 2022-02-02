import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadReports } from "../../store/reducers/reports";
import SectionHeader from "../common/SectionHeader";
import ReportsHeader from "./reports/ReportsHeader";

function Reports() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReports());
  }, [dispatch]);

  return (
    <Box>
      <SectionHeader title="Reports" />
      <ReportsHeader />
    </Box>
  );
}

export default Reports;
