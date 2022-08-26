import "./MachinePosition.css";
import { Link } from "react-router-dom";
import MachineBody from "./MachineBody.js";

const MachinePosition = () => {
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
          <MachineBody />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MachinePosition;
