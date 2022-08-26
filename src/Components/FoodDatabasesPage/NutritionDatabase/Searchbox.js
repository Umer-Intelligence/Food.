import "./Nutrition.css";

const Searchbox = ({ onKeyPress, value, onChange }) => {
  return (
    <div className="Nutrition-Searchbox">
      <input
        type="text"
        placeholder="Type an ingredient to find its nutritious value"
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Searchbox;
