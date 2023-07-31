import "./CheckBoxList.css";
import ListItem from "./ListItem";

export default function CheckBoxList({ list }: { list: string[] }) {
  return (
    <ul>
      {list.map((txt: string, i: number) => (
        <ListItem key={i} listText={txt} />
        // <li key={i}>{txt}</li>
      ))}
    </ul>
  );
}
