interface PostListPageData {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export const postListPageLoader = async (): Promise<PostListPageData[]> => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data: PostListPageData[] = await res.json();

    return data;
  } catch (err) {
    throw new Error("error");
  }
};
