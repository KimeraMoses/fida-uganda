import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetMe } from "./hooks/useUser";
import Auth from "./components/compound/Auth";
import LoadingPage from "./components/common/LoadingPage";
import View from "./View";
import { loginUser } from "./store/authReducer";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { toast } from "react-toastify";

function App() {
  const { refetch, data, isLoading } = useGetMe();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userData = useMemo(() => data, [data]);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      refetch();
    }
    if (userData) {
      dispatch(loginUser(userData));
    }
    if (!isOnline) {
      // raise a toast to tell the user that they're offline
      toast.warn("You're offline. Check your internet connection");
    }
  }, [refetch, dispatch, userData, isOnline]);

  if (!user) {
    if (isLoading) {
      return <LoadingPage />;
    }
    return <Auth />;
  }

  return <View />;
}

export default App;
