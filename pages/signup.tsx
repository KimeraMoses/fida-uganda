import type { NextPage } from "next";
import usePosts from "../data/usePost";
import IPost from "../interfaces/Post";

const Login: NextPage = () => {
  const { posts, error, isLoading } = usePosts();
  if (error || isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: IPost) => (
          <li
            key={post.id}
            style={{
              border: "1px solid limegreen",
              marginBottom: "1rem",
              width: "50%",
            }}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Login;
