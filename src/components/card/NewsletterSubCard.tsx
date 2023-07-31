import "./Card.css";
import "./NewsletterSubCard.css"
import CardImage from "./CardImage";
import CardBody from "./CardBody";

export default function Card() {
  return (
    <div className="Card NewsletterSubCard">
      <CardImage />
      <CardBody />
    </div>
  );
}
