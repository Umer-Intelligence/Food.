import { Link } from "react-router-dom";
import "./Recipe.css";
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
