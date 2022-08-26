import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <>
      <div>
        <Link to="/Database">
          <button className="GetStartedbutton" align="left">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default GetStarted;
