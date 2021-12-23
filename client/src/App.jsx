import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import RecoverPassword from "./components/pages/RecoverPassword";
import RequireAuth from "./components/routing/RequireAuth";
import Home from "./components/pages/Home";
import { getUser } from "./store/reducers/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  });

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
