import useSWR from "swr";
import { fetcher } from "./fetcher";

const usePosts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    {suspense: true}
  );
  return { posts: data, isLoading: !data && !error, error: error };
};

export default usePosts;
