import { Link } from "react-router-dom";
import AboutTopBar from "./AboutTopBar.js";

const About = () => {
  return (
    <>
      <AboutTopBar />
      <div className="About-heading">
        <div className="About-text">
          <u>About</u>
        </div>
        <div className="About-para">
          For more than 50 years Food.ltd is serving its customers with full
          commitment and focus . Our misson was , is and will always remain to
          give accurate information about the <Link to="/Recipe">recipes</Link>{" "}
          and the <Link to="/Nutrition">nutritious</Link> value of your
          favourite foods.{" "}
        </div>
      </div>
    </>
  );
};

export default About;
