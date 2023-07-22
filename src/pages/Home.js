import { Outlet, Link } from "react-router-dom";
//import "./Home.css";

const Home = () => {
  //var user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="Home-container">
      <h1 className="Home-name">{user.username}</h1>
      <Link to="/Login">
        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("currentUser");
          }}
        >
          Logout
        </button>
      </Link>
      <nav className="user-navigation">
        <ul>
          <li>
            <Link to={`/Users/${user.id}/Posts`}>Posts</Link>
          </li>
          <li>
            <Link to={`/Users/${user.id}/Todos`}>Todos</Link>
          </li>
          {/* <li>
            <Link to={`/Users/${user.id}/Albums`}>Albums</Link>
          </li> */}
          <li>
            <Link to={`/Users/${user.id}/Info`}>Info</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
