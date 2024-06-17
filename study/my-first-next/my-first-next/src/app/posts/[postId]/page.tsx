function PostDetailPage(props: { params: { postId: string } }) {
  return <div>포스트 상세 {props.params.postId}</div>;
}

export default PostDetailPage;

// 동적라우팅은 기본적으로 SSR 로 불러와진다.
