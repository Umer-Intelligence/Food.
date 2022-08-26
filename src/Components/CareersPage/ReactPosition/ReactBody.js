import "./ReactPosition.css";

const ReactBody = () => {
  return (
    <div>
      <div className="item-text">React Engineer</div>

      <div className="item">Location : Islamabad</div>
      <br />
      <div className="item">
        <u>Responsibilities</u>
      </div>
      <br />
      <div className="item">
        <ul>
          <li>
            {" "}
            A React developer is responsible for the design and implementation
            of user interfaces (UIs) and UI components using React, a front-end
            JavaScript library.
          </li>
          <br />
          <li>They develop and maintain UIs for web and mobile apps.</li>
          <br />
          <li>
            {" "}
            They must have high-level expertise using React and a deep
            understanding of all stages of the software development life cycle.
          </li>
          <br />{" "}
          <li>
            They write, test, debug, and implement code to meet user
            requirements.
          </li>
        </ul>
      </div>
      <div className="item">
        <u>Required Skills</u>
        <ul>
          <br />
          <li>
            Strong proficiency in JavaScript, including DOM manipulation and the
            JavaScript object model Thorough understanding of React.js and its
            core principles
          </li>
          <br />
          <li>
            Experience with popular React.js workflows (such as Flux or Redux)
          </li>
          <br />
          <li>Familiarity with newer specifications of EcmaScript</li>
          <br />
          <li>Experience with data structure libraries (e.g., Immutable.js)</li>
          <br />
          <li>
            Knowledge of isomorphic React is a plus Familiarity with RESTful
            APIs
          </li>
        </ul>
        <div>
          <button className="Apply-button"> Apply Now !</button>
        </div>
      </div>
    </div>
  );
};

export default ReactBody;
