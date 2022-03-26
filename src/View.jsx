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
import ITProducts from './components/itDepartment/ITProducts'
import ITServices from "./components/itDepartment/itServices";
import ITComplaints from './components/itDepartment/ITComplaints'
import FleetDatabase from "./components/fleetManager/FleetDatabase";
import Procurements from './components/procurement/Procurements'

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
