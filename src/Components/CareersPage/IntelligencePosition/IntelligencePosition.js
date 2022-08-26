import "./IntelligencePosition.css";
import { Link } from "react-router-dom";
import IntelligenceBody from "./IntelligenceBody.js";

const IntelligencePosition = () => {
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
          <IntelligenceBody />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default IntelligencePosition;
