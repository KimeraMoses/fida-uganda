import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import RecoverPassword from "./components/pages/RecoverPassword";
import RequireAuth from "./components/routing/RequireAuth";
import Home from "./components/pages/Home";

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
