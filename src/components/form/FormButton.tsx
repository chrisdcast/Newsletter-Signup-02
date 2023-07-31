import "../card/Button.css";

export default function FormButton({ text }: { text: string }) {
  return (
    <div className="Button">
      <input type="submit" value={text} />
    </div>
  );
}
