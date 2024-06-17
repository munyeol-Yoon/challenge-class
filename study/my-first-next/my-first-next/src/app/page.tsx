import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      이것이 홈페이지
      <Link href="/posts">포스트 페이지로 ㄱㄱ</Link>
      <a href="posts">포스트 페이지로 ㄱㄱ 2</a>
    </main>
  );
}

/**
 * 맨처음에 페이지에 접속했을때
 * html 은 서버에서 그려서 온다.
 * 그려진 화면 내에서 Link 태그로 페이지를 이동했을 때 -> 새로운 HTML 은 클라이언트에서 그린다.
 * 그려진 화면 내에서 a 태그로 이동했을 때 -> ssr 로 다시 부른다.
 *
 * 처음에 불러올 때는 SSR 로 불러온다 -> 왜? SEO
 * 그 다음 매번 서버와 통신은 안하는게 좋다. -> 때문에 기본적으로 CSR 로 그려나간다.
 * 때문에 Link 태그를 사용해야 한다.
 */
