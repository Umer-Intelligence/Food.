import { Link } from "react-router-dom";
import "./Nutrition.css";
const AccountantPosition = () => {
  return (
    <>
      <div>
        <Link to="/Database">
          <button className="Backtobutton" align="left">
            Back to Food Databases
          </button>
        </Link>
      </div>
    </>
  );
};

export default AccountantPosition;
