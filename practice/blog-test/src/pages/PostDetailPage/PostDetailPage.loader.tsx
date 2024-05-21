import { LoaderFunctionArgs } from "react-router-dom";

interface PostDetailPageLoaderParams {
  postId: string;
}

interface PostDetailPageData {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export const postDetailPageLoader = async ({
  params,
}: LoaderFunctionArgs<{
  params: PostDetailPageLoaderParams;
}>): Promise<PostDetailPageData> => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
    const res = await fetch(url);
    const data: PostDetailPageData = await res.json();

    if (!res.ok) {
      throw new Error("gd");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("error");
  }
};
