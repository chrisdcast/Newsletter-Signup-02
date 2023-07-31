import "./Card.css";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

export default function Card() {
  return (
    <div className="Card">
      <CardImage />
      <CardBody />
    </div>
  );
}
