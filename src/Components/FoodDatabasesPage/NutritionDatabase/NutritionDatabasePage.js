import Searchbox from "./Searchbox.js";
import LoadingSpinner from "./LoadingSpinner";
import NutritionContainer from "./NutritionContainer.js";
import Backtobutton from "./Backtobutton.js";
import { useState } from "react";
import axios from "axios";
const NutritionDatabase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nutrition, setNutrition] = useState("");
  const url = `https://api.edamam.com/api/nutrition-data?app_id=cb055b39&app_key=3880c557d65b065199083864b8ccc005&nutrition-type=logging&ingr=${nutrition}`;
  const searchNutrition = (event) => {
    if (event.key === "Enter") setLoading(true);
    setData([]);
    axios.get(url).then((response) => {
      setLoading(false);
      setData(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <Backtobutton />
      <div className="Nutrition-container">
        <>Nutrition Database</>
        <Searchbox
          onChange={(event) => setNutrition(event.target.value)}
          onKeyPress={searchNutrition}
          value={nutrition}
        />
        <>{loading && <LoadingSpinner />}</>

        <div></div>
        <div>
          <div>
            <div className="NutritionContainer">
              <div>Calories</div>
              <div>Total Weight (mg)</div>
            </div>
            <div className="CalorieContainer">
              <div>{data?.calories}</div>
              <div>{data.totalWeight?.toFixed()}</div>
            </div>
          </div>
          <div />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default NutritionDatabase;
