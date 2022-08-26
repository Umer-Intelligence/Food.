import "./Recipe.css";

const Searchbox = ({ onKeyPress, value, onChange }) => {
  return (
    <div className="Searcharea">
      <input
        type="text"
        placeholder="Search your favouite Recipe"
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Searchbox;
