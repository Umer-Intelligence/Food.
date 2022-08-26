import "./About.css";
import { Link } from "react-router-dom";
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
      <Link to="/Careers">
        <button className="Topbar-item">Careers</button>
      </Link>
      <div>
        {" "}
        <Link to="/ContactUs">
          <button className="Topbar-item">Contact Us</button>
        </Link>
      </div>
      <div>
        <Link to="/About">
          <button className="Topbar-item-3">About</button>
        </Link>
      </div>
    </div>
  );
};

export default topbar;
