import "./AccountantPosition.css";

const CloudBody = () => {
  return (
    <div>
      <div className="item-text">Accountant</div>

      <div className="item">Location : Karachi</div>
      <br />
      <div className="item">
        <u>Responsibilities</u>
      </div>
      <br />
      <div className="item">
        <ul>
          <li>Manage all accounting transactions</li>
          <br />
          <li>Prepare budget forecasts.</li>
          <br />
          <li>Publish financial statements in time</li>
          <br />
          <li>Handle monthly, quarterly and annual closings</li>
        </ul>
      </div>
      <div className="item">
        <u>Required Skills</u>
        <ul>
          <br />
          <li>Work experience as an Accountant</li>
          <br />
          <li>
            Excellent knowledge of accounting regulations and procedures,
            including the Generally Accepted Accounting Principles (GAAP)
          </li>
          <br />
          <li>
            Hands-on experience with accounting software like FreshBooks and
            QuickBooks
          </li>
          <br />
          <li>Advanced MS Excel skills including Vlookups and pivot tables</li>
          <br />
          <li>BSc in Accounting, Finance or relevant degree</li>
        </ul>
        <div>
          <button className="Apply-button"> Apply Now !</button>
        </div>
      </div>
    </div>
  );
};

export default CloudBody;
