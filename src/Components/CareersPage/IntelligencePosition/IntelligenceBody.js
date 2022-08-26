import "./IntelligencePosition.css";

const IntelligenceBody = () => {
  return (
    <div>
      <div className="item-text">Business Intelligence Analyst</div>

      <div className="item">Location : Remote</div>
      <br />
      <div className="item">
        <u>Responsibilities</u>
      </div>
      <br />
      <div className="item">
        <ul>
          <li>
            Consulting with management and relevant stakeholders to define goals
          </li>
          <br />
          <li>
            Researching, developing and implementing data-gathering methods
          </li>
          <br />
          <li>Analyzing and synthesizing data.</li>
          <br />{" "}
          <li>
            Collaborating with coworkers and management to implement
            improvements.
          </li>
        </ul>
      </div>
      <div className="item">
        <u>Required Skills</u>
        <ul>
          <br />
          <li>
            Bachelor's Degree in computer science, statistics, business studies,
            or related field.
          </li>
          <br />
          <li>Proven experience with programming for data analysis.</li>
          <br />
          <li>Firm understanding of statistics and databases.</li>
          <br />
          <li>Expert problem-solving and analytical skills.</li>
          <br />
          <li>Ability to work in a fast-paced, deadline-driven environment.</li>
        </ul>
        <div>
          <button className="Apply-button"> Apply Now !</button>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceBody;
