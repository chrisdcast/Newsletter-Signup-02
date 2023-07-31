import "./CardBody.css";
import CheckBoxList from "./CheckBoxList";
import FormBody from "../form/FormBody";

export default function CardBody() {
  const listText: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <div className="CardBody">
      <h1>Stay Updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <CheckBoxList list={listText} />
      <FormBody />
    </div>
  );
}
