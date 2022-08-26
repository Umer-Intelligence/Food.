import { Card } from "react-bootstrap";
import "./FoodDatabases.css";
import { Link } from "react-router-dom";

function FoodRecipe() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/37/Foodnerd-cheap-food-Islamabad.jpg"
        width={300}
        height={180}
      />
      <Card.Body>
        <Card.Text className="Text">
          <u>Recipe Database</u>
          <br />
          <br />
          You love a dish but don't know how to make it ? Not anymore.
        </Card.Text>
        <Link to="/Recipe">
          <button className="Button">Find out</button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default FoodRecipe;
