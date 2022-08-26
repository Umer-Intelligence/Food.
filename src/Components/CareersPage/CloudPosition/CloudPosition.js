import "./CloudPosition.css";
import { Link } from "react-router-dom";

const CloudBody = () => {
  return (
    <>
      <div>
        <Link to="/Careers">
          <button className="button" align="left">
            Back to Open Positions
          </button>
        </Link>
      </div>
      <div className="heading">
        <div className="item-text">Cloud Engineer</div>
        <div className="item">Location : Lahore</div>
        <br />
        <div className="item">
          <u>Responsibilities</u>
        </div>
        <br />
        <div className="item">
          <ul>
            <li>
              {" "}
              Collaborating with engineering and development teams to evaluate
              and identify optimal cloud solutions
            </li>
            <br />
            <li>
              Educating teams on the implementation of new cloud technologies
              and initiatives..
            </li>
            <br />
            <li>
              {" "}
              Designing, developing and deploying modular cloud-based systems.
            </li>
            <br />{" "}
            <li>
              Developing and maintaining cloud solutions in accordance with best
              practices.
            </li>
          </ul>
        </div>
        <div className="item">
          <u>Required Skills</u>
          <ul>
            <br />
            <li>Degree in computer science or a similar field.</li>
            <br />
            <li>
              At least 3 years of experience in the field of cloud computing.
            </li>
            <br />
            <li>Experience with CI/CD systems.</li>
            <br />
            <li>Azure, AWS, and GCP certifications preferred.</li>
            <br />
            <li>Experience with SysOps.</li>
          </ul>
          <div>
            <button className="Apply-button"> Apply Now !</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudBody;
