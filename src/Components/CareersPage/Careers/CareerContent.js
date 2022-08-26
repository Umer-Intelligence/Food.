import "./Careers.css";
import { HashLink as Link } from "react-router-hash-link";
const CareerContent = () => {
  return (
    <div>
      <div className="Career-container">
        <div>
          <div className="Heading-Career">
            Food.ltd believes that the success and prosperity of the company
            depends on the health and wellbeing of its workforce . That's why we
            provide excellent perks to our employes to keep their morale
            boosted. Want to become part of this amazing journey ? Apply right
            away!
          </div>
          <div className="Apply">
            <Link to="#position" smooth>
              <button className="button">Apply Now !</button>
            </Link>
          </div>
        </div>
        <div className="Position-container">
          <div className="Position-Heading" id="position">
            Open Positions
          </div>
          <div className="Job-container">
            <div>
              <Link to="/ReactPosition" smooth>
                <button className="button">
                  React Engineer (Islamabad , PK)
                </button>
              </Link>
            </div>
            <div>
              <Link to="/IntelligencePosition">
                <button className="button">
                  Business Intelligence Analyst(Remote)
                </button>
              </Link>
            </div>
            <div>
              <Link to="/CloudPosition">
                <button className="button">
                  Cloud Enigneer : Teradata (Lahore , PK)
                </button>
              </Link>
            </div>
            <div>
              <Link to="/MachinePosition">
                <button className="button">
                  Machine Learining Engineer (Hybrid)
                </button>
              </Link>
            </div>
            <div>
              <Link to="/Accountant">
                <button className="button">Accountant (Karachi , PK)</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerContent;
