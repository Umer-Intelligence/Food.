import "/Components/GetStartedButton/GetStartedButton.css";
import { Link } from "react-router-dom";

const SearchButton = () => {
  return (
    <div>
      <Link to="Database">
        <button className="GetStartedButton">Get Started</button>
      </Link>
    </div>
  );
};

export default SearchButton;
