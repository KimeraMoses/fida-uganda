import { useEffect } from "react";
import { useGetMe } from "./hooks/useUser";
import Auth from "./components/compound/Auth";
import LoadingPage from "./components/common/LoadingPage";
import View from "./View";

function App() {
  const { refetch, isLoading, data } = useGetMe();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      refetch();
    }
  }, [refetch]);

  if (!data?.user) {
    if (isLoading) {
      return <LoadingPage />;
    }
    return <Auth />;
  }

  return <View />;
}

export default App;
