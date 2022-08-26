import "../../Topbar/Topbar.css";
import { Link } from "react-router-dom";
import "./Careers.css";
const topbar = () => {
  return (
    <div className="Topbar-container">
      <div>
        <Link to="/">
          <button className="Topbar-item">Home</button>
        </Link>
      </div>
      <div>
        <Link to="/Database">
          <button className="Topbar-item">Food Databases</button>
        </Link>
      </div>
      <div>
        <Link to="/Careers">
          <button className="Topbar-item-1">Careers</button>
        </Link>
      </div>
      <Link to="/ContactUs">
        <button className="Topbar-item">Contact Us</button>
      </Link>{" "}
      <Link to="/About">
        <button className="Topbar-item">About</button>
      </Link>{" "}
    </div>
  );
};

export default topbar;
