import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  //var user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div dir="rtl" className="Layout-container">
      <Link to="/Login">
        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("currentUser");
          }}
        >
          כניסה
        </button>
      </Link>
      <nav className="Layout-navigation">
        <ul>
          <li>
            <Link to={`/Layout/Home`}>דף הבית</Link>
          </li>
          <li>
            <Link to={`/`}>כלי עבודה</Link>
          </li>
          <li>
            <Link to={`/`}>כלי גינה</Link>
          </li>
          <li>
            <Link to={`/`}>כלי קמפינג</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
