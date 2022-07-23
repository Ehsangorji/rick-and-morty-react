import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Character">Character</Link>
          </li>
          <li>
            <Link to="/Episode">Episode</Link>
          </li>
          <li>
            <Link to="/Location">Location</Link>
          </li> <li>
            <Link to="/Episode">Episode</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  );
};

export default Layout;
