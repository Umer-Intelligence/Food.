import "/Components/Topbar/Topbar.css";
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
        <Link to="Database">
          <button className="Topbar-item">Food Databases</button>
        </Link>
      </div>
      <div className="Topbar-item">Careers</div>
      <div className="Topbar-item">Contact Us</div>
      <div className="Topbar-item">About</div>
    </div>
  );
};

export default topbar;
