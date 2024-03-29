import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/compound/Layout";
import Dashboard from "./components/compound/Dashboard";
// import Clients from "./components/compound/Clients";
// import CaseFiles from "./components/compound/CaseFiles";
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
import FleetDatabase from "./components/fleetManager/FleetDatabase";
import Procurements from "./components/procurement/Procurements";
import FidaApprovals from "./components/HumanResource/FidaApprovals/FidaApprovals";
import Tasks from "./components/Tasks/Tasks";
import Clients from "./components/LegalAid/Clients/Clients";
import CLVs from "./components/LegalAid/CLVs/CLVs";
import ClvCaseFiles from "./components/LegalAid/ClvCaseFiles/ClvCaseFiles";
import CaseFiles from "./components/LegalAid/CaseFIles/CaseFiles";
import ProjectFiles from "./components/LegalAid/ProjectFiles/ProjectFiles";
import FidaProjects from "./components/ME/FidaProjects/FidaProjects";
import FidaProjectFiles from "./components/ME/FidaProjects/FidaProjectFiles/FidaProjectFiles";
import FidaDatabases from "./components/ME/FidaDatabases/FidaDatabases";
import DatabaseOpen from "./components/ME/FidaDatabases/DatabaseOpen";
import ClientFiles from "./components/Counsellor/ClientFiles/ClientFiles";
import ITProducts from "./components/itDepartment/Products/ITProducts";
import ITServices from "./components/itDepartment/Services/ITServices";
import ITComplaints from "./components/itDepartment/Complaints/ITComplaints";
import Employees from "./components/HumanResource/EmployeeContract/Employees";
import EventAttendence from "./components/dashboard/EventsAttendence/EventAttendence";
import ReportFiles from "./components/HumanResource/Reports/ReportFiles/ReportFiles";
import SummaryDetails from "./components/dashboard/SummaryDetails/SummaryDetails";
import LegalOfficer from "./components/CourtProcessServer/LegalOfficer/LegalOfficer";
import ReportSummaryDetails from "./components/HumanResource/Reports/ReportSummary/ReportSummary";
import ProjectFilesDocuments from "./components/LegalAid/ProjectFiles/ProjectDocuments/ProjectFilesDocuments";
import FileSummary from "./components/LegalAid/ProjectFiles/ProjectFilesTable/FileSummary";
import FidaProjectFilesDocuments from "./components/ME/FidaProjects/FidaProjectFiles/FidaProjectFilesDocuments";
import FidaDocumentSummary from "./components/ME/FidaProjects/FidaProjectFiles/FidaDocumentSummary";

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
        <Route path="application-summary" element={<SummaryDetails />} />
        <Route path="events-attendance" element={<EventAttendence />} />
        <Route path="clients" element={<Clients />} />
        <Route path="clients-files" element={<ClientFiles />} />
        <Route path="clvs" element={<CLVs />} />
        <Route path="account-settings" element={<AccountSettings />} />
        <Route path="case-files" element={<CaseFiles />} />
        <Route path="legal-officer" element={<LegalOfficer />} />
        <Route path="project-files" element={<ProjectFiles />} />
        <Route
          path="project-files/documents/:folderName/:id"
          element={<ProjectFilesDocuments />}
        />
        <Route path="project-files/documents/:id" element={<FileSummary />} />
        <Route path="clv-case-files" element={<ClvCaseFiles />} />
        <Route path="clv-database" element={<ClvDatabase />} />
        <Route path="requisitions" element={<Requisitions />} />
        <Route
          path="requisitions/:reqName"
          element={<SummaryDetails type="requisition" />}
        />
        <Route path="travel-order" element={<TravelOrder />} />
        <Route
          path="travel-order/:travelName"
          element={<SummaryDetails type="travel" />}
        />
        <Route path="members" element={<Members />} />
        <Route path="members-activities" element={<MembersActivities />} />
        <Route path="allocations" element={<Allocations />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="approvals" element={<Approvals />} />
        <Route path="fida-iims-approvals" element={<FidaApprovals />} />
        <Route path="hr-approvals" element={<HRApprovals />} />
        <Route path="payroll" element={<PayRoll />} />
        <Route path="leave-management" element={<LeaveManagement />} />
        <Route path="employees" element={<Employees />} />
        <Route path="contracts" element={<EmployeeContract />} />
        <Route path="fida-assets" element={<FidaAssets />} />
        <Route path="reports" element={<Reports />} />
        <Route path="reports/:reportFolderName" element={<ReportFiles />} />
        <Route
          path="reports/reportFolder/:id"
          element={<ReportSummaryDetails />}
        />
        <Route path="it-products" element={<ITProducts />} />
        <Route path="it-services" element={<ITServices />} />
        <Route path="it-complaints" element={<ITComplaints />} />
        <Route path="fleet-database" element={<FleetDatabase />} />
        <Route path="procurements" element={<Procurements />} />
        <Route path="fida-databases" element={<FidaDatabases />} />
        <Route path="fida-databases/:dbName" element={<DatabaseOpen />} />
        <Route path="fida-projects" element={<FidaProjects />} />
        <Route
          path="fida-projects/:folderName/:id"
          element={<FidaProjectFiles />}
        />
        <Route
          path="fida-project-files/documents/:folderName/:id"
          element={<FidaProjectFilesDocuments />}
        />
        <Route
          path="fida-project-files/documents/:id"
          element={<FidaDocumentSummary />}
        />
      </Route>
    </Routes>
  );
};

export default View;
