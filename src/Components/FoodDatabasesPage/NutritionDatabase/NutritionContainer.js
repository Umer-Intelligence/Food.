const NutritionContainer = (value) => {
  return (
    <div>
      <div className="NutritionContainer">
        <div>
          <button className="Nutrition-Button">Calories</button>
        </div>
        <div>
          <button className="Nutrition-Button">Status</button>
        </div>
        <div>
          <button className="Nutrition-Button">Energy</button>
        </div>
      </div>
      <div className="CalorieContainer">
        <div>{value?.calories}</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
};
export default NutritionContainer;
