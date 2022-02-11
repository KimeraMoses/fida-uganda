import { Box, Flex } from "@chakra-ui/react";
import { Routes, Route, Outlet } from "react-router-dom";
import PageNotFound from "../common/PageNotFound";
import SideBar from "../common/SideBar";
import Dashboard from "./Dashboard";
import TopNav from "../common/TopNav";
import ClvDatabase from "./clv/ClvDatabase";
import ClvComplaints from "./clv/ClvComplaints";
import Tasks from "./Tasks";
import CaseFiles from "./legalAid/CaseFiles";
import Reports from "./Reports";
import FidaDatabases from "./programs/FidaDatabases";
import FidaProjects from "./programs/FidaProjects";
import FidaAssets from "./m&e/FidaAssets";
import Clients from "./clients/Clients";
import { scrollbar } from "../../defaultData/theme";

function Home() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Flex>
            <SideBar />
            <Box width="75%">
              <TopNav />
              <Box bgColor="purple.50" p="2rem" height="100%" css={scrollbar}>
                <Outlet />
              </Box>
            </Box>
          </Flex>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="reports" element={<Reports />} />
        <Route path="clients" element={<Clients />} />
        <Route path="clv-database" element={<ClvDatabase />} />
        <Route path="clv-complaints" element={<ClvComplaints />} />
        <Route path="case-files" element={<CaseFiles />} />
        <Route path="fida-databases" element={<FidaDatabases />} />
        <Route path="fida-projects/*" element={<FidaProjects />} />
        <Route path="fida-assets" element={<FidaAssets />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Home;
