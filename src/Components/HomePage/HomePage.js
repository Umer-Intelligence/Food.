import FoodHeading from "../FoodHeading/FoodHeading.js";
import GetStartedButton from "./GetStartedButton.js";
import Topbar from "./HomeTopBar.js";
import TextHeading from "../FoodHeading/TextHeading.js";

const HomePage = () => {
  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="container-heading">
        <div className="item">
          <FoodHeading />
          <TextHeading />
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
