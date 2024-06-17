import Link from "next/link";

function PostsPage() {
  return (
    <div>
      <h1 className="text-4xl border-b">포스트 목록</h1>
      <ol>
        {Array(5000)
          .fill("1")
          .map((_, i) => (
            <li key={i}>
              <Link href={`/posts/${i}`}>{i}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default PostsPage;
