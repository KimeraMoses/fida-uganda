import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/compound/Layout";
import Dashboard from "./components/compound/Dashboard";
import Clients from "./components/compound/Clients";
import CaseFiles from "./components/compound/CaseFiles";
import Requisitions from "./components/compound/Requisitions";
// import Tasks from "./components/compound/Tasks";
import ClvDatabase from "./components/compound/ClvDatabase";
import TravelOrder from "./components/compound/TravelOrder";
import Members from "./components/Membership/Members/Members";
import MembersActivities from "./components/Membership/MembersActivities/MembersActivities";
import Allocations from "./components/Membership/Allocations/Allocations";
import Notifications from "./components/Membership/Notifications/Notifications";
import Approvals from "./components/Membership/Approvals/Approvals";
import HRApprovals from "./components/HumanResource/Approvals/Approvals";
import PayRoll from "./components/HumanResource/PayRoll/PayRoll";
import LeaveManagement from "./components/HumanResource/LeaveManagement/LeaveManagement";
import EmployeeContract from "./components/HumanResource/EmployeeContract/EmployeeContract";
import FidaAssets from "./components/HumanResource/FidaAssets/FidaAssets";
import Reports from "./components/HumanResource/Reports/Reports";
import Tracker from "./components/compound/Tracker";
import AccountSettings from "./components/compound/AccountSettings";
import ITProducts from "./components/itDepartment/ITProducts";
import ITServices from "./components/itDepartment/itServices";
import ITComplaints from "./components/itDepartment/ITComplaints";
import FleetDatabase from "./components/fleetManager/FleetDatabase";
import Procurements from "./components/procurement/Procurements";
import FidaApprovals from "./components/HumanResource/FidaApprovals/FidaApprovals";
import Tasks from "./components/Tasks/Tasks";

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
        <Route path="leave-advance-tracker" element={<Tracker />} />
        <Route path="clients" element={<Clients />} />
        <Route path="account-settings" element={<AccountSettings />} />
        <Route path="case-files" element={<CaseFiles />} />
        <Route path="clv-database" element={<ClvDatabase />} />
        <Route path="requisitions" element={<Requisitions />} />
        <Route path="travel-order" element={<TravelOrder />} />
        <Route path="members" element={<Members />} />
        <Route path="members-activities" element={<MembersActivities />} />
        <Route path="allocations" element={<Allocations />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="approvals" element={<Approvals />} />
        <Route path="fida-iims-approvals" element={<FidaApprovals />} />
        <Route path="hr-approvals" element={<HRApprovals />} />
        <Route path="payroll" element={<PayRoll />} />
        <Route path="leave-management" element={<LeaveManagement />} />
        <Route path="employee-contract" element={<EmployeeContract />} />
        <Route path="fida-assets" element={<FidaAssets />} />
        <Route path="reports" element={<Reports />} />
        <Route path="it-products" element={<ITProducts />} />
        <Route path="it-services" element={<ITServices />} />
        <Route path="it-complaints" element={<ITComplaints />} />
        <Route path="fleet-database" element={<FleetDatabase />} />
        <Route path="procurements" element={<Procurements />} />
      </Route>
    </Routes>
  );
};

export default View;
