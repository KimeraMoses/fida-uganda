import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import { APP_PREFIX } from "./hooks/useLocalStorage";
import { getUser } from "./store/reducers/auth";
import LoadingPage from "./components/pages/LoadingPage";

function App() {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(`${APP_PREFIX}token`);
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  if (!user) {
    if (loading) {
      return (
        <Box maxW="1400px" m="0 auto" minH="100vh">
          <LoadingPage />
        </Box>
      );
    }
    return (
      <Box maxW="1400px" m="0 auto" minH="100vh">
        <Routes>
          <Route path="*" element={<Auth />} />
        </Routes>
      </Box>
    );
  }

  return (
    <Box maxW="1400px" m="0 auto" minH="100vh">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
