import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  var user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div dir="rtl" className="Layout-container">      
      <nav className="Layout-navigation">
        
        <ul>
          <li>
            <Link to={`/ArgazKelim/Home`}>דף הבית</Link>
          </li>
          <li>
            <Link to={`/ArgazKelim/GardenTools`}>כלי גינה</Link>
          </li>
          <li>
            <Link to={`/ArgazKelim/ElectricEquipment`}>ציוד חשמלי</Link>
          </li>
          <li>
            <Link to={`/ArgazKelim/HandTools`}>כלי עבודה ידניים</Link>
          </li>
          <li>
            <Link to={`/ArgazKelim/ProtectiveEquipment`}>ציוד מגן</Link>
          </li>
          <li>
            <Link to={`/ArgazKelim/HomeTools`}>כלי עבודה לבית</Link>
          </li>
          <li>
            <Link to={`/ArgazKelim/CampingTools`}>כלי קמפינג</Link>
          </li>
          <li>
            <Link to={`/ArgazKelim/DonatingTools`}>תרומת כלים</Link>
          </li>
        </ul>
        <Link to="/Login">
        {user?(<label
          onClick={() => {
            localStorage.removeItem("currentUser");
          }}>שלום {user.username}</label>):(
        <button
          className="login-button"
        >
          כניסה
        </button>)}
      </Link>

      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
