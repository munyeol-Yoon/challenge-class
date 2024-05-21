import { useState } from "react";
import PostInputForm from "../../components/PostInputForm";
import { Post } from "../../components/PostInputForm.type";

function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  console.log(posts);

  return (
    <div>
      <h1>HomePage</h1>
      <PostInputForm posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default HomePage;
