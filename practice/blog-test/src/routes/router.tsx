import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import DefaultErrorPage from "../pages/DefaultErrorPage/DefaultErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import { postDetailPageLoader } from "../pages/PostDetailPage/PostDetailPage.loader";
import PostListPage from "../pages/PostListPage/PostListPage";
import { postListPageLoader } from "../pages/PostListPage/PostListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
        loader: postListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: postDetailPageLoader,
      },
    ],
  },
  {
    element: <DefaultErrorPage />,
    path: "/*",
  },
]);

export default router;
