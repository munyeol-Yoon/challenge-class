import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/posts">List</Link>
      <br />
      <Link to="/posts/:postId">Detail</Link>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
