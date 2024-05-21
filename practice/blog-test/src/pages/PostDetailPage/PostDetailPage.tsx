import { useLoaderData } from "react-router-dom";

interface Post {
  id: string;
  userId: string;
  body: string;
  title: string;
}

function PostDetailPage() {
  const post: Post = useLoaderData() as Post;

  return (
    <div>
      <h1>PostDetailPage</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetailPage;
