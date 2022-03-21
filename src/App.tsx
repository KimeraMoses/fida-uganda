import { useEffect } from "react";
import { useGetMe } from "./hooks/useUser";
import Auth from "./components/compound/Auth";
import Layout from "./components/compound/Layout";

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
      return <div>Loading...</div>;
    }
    return <Auth />;
  }

  return <Layout></Layout>;
}

export default App;
