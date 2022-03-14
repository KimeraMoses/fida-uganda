import useSWR from "swr";

const usePosts = () => {
  const { data, error, isValidating, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return { posts: data, isLoading: !data && !error, error: error };
};

export default usePosts;
