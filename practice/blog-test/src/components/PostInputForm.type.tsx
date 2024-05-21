export type Post = {
  postId: string;
  id: string;
  title: string;
  content: string;
};

export type PostsPropsType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[] | never[]>>;
};
