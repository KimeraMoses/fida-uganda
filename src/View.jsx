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
import AccountSettings from "./components/compound/AccountSettings";
import Tracker from "./components/compound/Tracker";

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
        <Route path="reports" element={<Reports />} />
        <Route path="travel-order" element={<TravelOrder />} />
      </Route>
    </Routes>
  );
};

export default View;
