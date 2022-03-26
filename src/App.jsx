import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetMe } from "./hooks/useUser";
import Auth from "./components/compound/Auth";
import LoadingPage from "./components/common/LoadingPage";
import View from "./View";
import { loginUser } from "./store/authReducer";

function App() {
  const { refetch, data, isLoading } = useGetMe();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userData = useMemo(() => data?.user, [data]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      refetch();
    }
    if (userData) {
      dispatch(loginUser(userData));
    }
  }, [refetch, dispatch, userData]);

  if (!user) {
    if (isLoading) {
      return <LoadingPage />;
    }
    return <Auth />;
  }

  return <View />;
}

export default App;
