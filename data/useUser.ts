import useSWR, { useSWRConfig } from "swr";
import { routes } from "./routes";

const useUser = () => {
  const { data, error } = useSWR(routes.getMe);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUser;
