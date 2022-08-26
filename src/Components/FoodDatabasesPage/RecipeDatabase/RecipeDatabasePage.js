import Searchbox from "./Searchbox.js";
import LoadingSpinner from "./LoadingSpinner";
import Backtobutton from "./Backtobutton.js";
import { useState } from "react";
import axios from "axios";
const RecipeDatabase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=6888aa48&app_key=0a352e6257de4665fb5391a8e3993a14&from=0to=4&imageSize=LARGE`;
  const searchRecipe = (event) => {
    if (event.key === "Enter") setLoading(true) & setData([]);
    axios.get(url).then((response) => {
      setLoading(false);
      setData(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <Backtobutton />
      <div className="Recipe-container">
        <>Recipe Database</>

        <Searchbox
          onChange={(event) => setRecipe(event.target.value)}
          onKeyPress={searchRecipe}
          value={recipe}
        />
        <>{loading && <LoadingSpinner />}</>
        <div className="thumb-container">
          <div className="food">
            <a href={data?.hits?.[0]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[0]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
                target="_blank"
              />
              <button className="Foodbutton">
                {data?.hits?.[0]?.recipe?.label}
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[1]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[1]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[1]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[2]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[2]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[2]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[3]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[3]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[3]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[4]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[4]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[4]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[5]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[5]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[5]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[6]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[6]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[6]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[7]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[7]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[7]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[8]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[8]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[8]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[9]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[9]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[9]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[10]?.recipe?.shareAs} target="_blank">
              <img
                src={data?.hits?.[10]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[10]?.recipe?.label}</div>
              </button>
            </a>
          </div>
          <div className="food">
            <a href={data?.hits?.[11]?.recipe?.shareAs} target={"_blank"}>
              <img
                src={data?.hits?.[11]?.recipe?.images?.LARGE?.url}
                width={250}
                alt={""}
              />
              <button className="Foodbutton">
                <div>{data?.hits?.[11]?.recipe?.label}</div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDatabase;
