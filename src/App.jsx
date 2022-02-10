import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import Home from "./components/pages/Home";
import { APP_PREFIX } from "./hooks/useLocalStorage";
import { getUser } from "./store/reducers/auth";
import LoadingPage from "./components/pages/LoadingPage";
import { scrollbar } from "./defaultData/theme";
import Auth from "./components/pages/Auth";

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
        <Box maxW="1400px" m="0 auto" minH="100vh" css={scrollbar}>
          <LoadingPage />
        </Box>
      );
    }
    return (
      <Box m="0 auto" minH="100vh" css={scrollbar}>
        <Auth />
      </Box>
    );
  }

  return (
    <Box maxW="1400px" m="0 auto" minH="100vh" css={scrollbar}>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
