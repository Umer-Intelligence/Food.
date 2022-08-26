import DatabasesTopbar from "./FoodTopBar.js";
import RecipeCard from "./RecipeCard";
import NutritionCard from "./NutritionCard";

const DatabasePage = () => {
  return (
    <>
      <div>
        <DatabasesTopbar />
      </div>
      <div className="container-cards">
        <div className="Card-item">
          <RecipeCard />
        </div>
        <div className="Card-item">
          <NutritionCard />
        </div>
      </div>
    </>
  );
};

export default DatabasePage;
