import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/compound/Layout";
import Dashboard from "./components/compound/Dashboard";
import Clients from "./components/compound/Clients";
import CaseFiles from "./components/compound/CaseFiles";
import Requisitions from "./components/compound/Requisitions";
import Tasks from "./components/compound/Tasks";
import ClvDatabase from "./components/compound/ClvDatabase";
import Reports from "./components/compound/Reports";
import TravelOrder from "./components/compound/TravelOrder";
import Members from "./components/Membership/Members/Members";
import MembersActivities from "./components/Membership/MembersActivities/MembersActivities";
import Allocations from "./components/Membership/Allocations/Allocations";
import Notifications from "./components/Membership/Notifications/Notifications";
import Approvals from "./components/Membership/Approvals/Approvals";

const View = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="clients" element={<Clients />} />
        <Route path="case-files" element={<CaseFiles />} />
        <Route path="clv-database" element={<ClvDatabase />} />
        <Route path="requisitions" element={<Requisitions />} />
        <Route path="reports" element={<Reports />} />
        <Route path="travel-order" element={<TravelOrder />} />
        <Route path="members" element={<Members />} />
        <Route path="members-activities" element={<MembersActivities />} />
        <Route path="allocations" element={<Allocations />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="approvals" element={<Approvals />} />
      </Route>
    </Routes>
  );
};

export default View;
