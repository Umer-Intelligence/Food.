import "./AccountantPosition.css";
import { Link } from "react-router-dom";
import AccountantBody from "./AccountantBody.js";

const AccountantPosition = () => {
  return (
    <>
      <div>
        <Link to="/Careers">
          <button className="button" align="left">
            Back to Open Positions
          </button>
        </Link>
      </div>
      <div className="Heading">
        <div>
          <AccountantBody />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AccountantPosition;
