import { Link, useLoaderData } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

function PostListPage() {
  const posts: Post[] = useLoaderData() as Post[];

  return (
    <div>
      <h1>PostListPage</h1>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <li key={post.id}>{post.title}</li>
        </Link>
      ))}
    </div>
  );
}

export default PostListPage;
