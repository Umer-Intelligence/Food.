import "./FoodDatabases.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function FoodRecipe() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
        width={300}
        height={180}
      />
      <Card.Body>
        <Card.Text className="Text">
          <u>Nutrition Database</u>
          <br />
          <br />
          Check out the nutrition value of your favourite foods.
        </Card.Text>
        <Link to="/Nutrition">
          <Button variant="primary" className="Button">
            Find out
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default FoodRecipe;
