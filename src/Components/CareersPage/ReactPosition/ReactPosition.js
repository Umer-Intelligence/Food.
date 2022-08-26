import "./ReactPosition.css";
import { Link } from "react-router-dom";
import ReactBody from "./ReactBody.js";

const ReactPosition = () => {
  return (
    <>
      <div>
        <Link to="/Careers">
          <button className="button" align="left">
            Back to Open Positions
          </button>
        </Link>
      </div>
      <div className="Heading-heading">
        <div>
          <ReactBody />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ReactPosition;
