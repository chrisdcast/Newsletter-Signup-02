import "./ListItem.css";

export default function ListItem({ listText }: { listText: string }) {
  return (
    <div className="ListItem">
      <div className="ListIcon">
        <img alt="List item checkmark icon"></img>
      </div>
      <p>{listText}</p>
    </div>
  );
}
