import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/compound/Layout";
import Dashboard from "./components/compound/Dashboard";
import Clients from "./components/compound/Clients";
import CaseFiles from "./components/compound/CaseFiles";

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
        <Route path="clients" element={<Clients />} />
        <Route path="case-files" element={<CaseFiles />} />
      </Route>
    </Routes>
  );
};

export default View;
