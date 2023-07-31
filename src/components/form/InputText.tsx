import "./InputText.css";
import { useFormContext } from "react-hook-form";

export default function InputText({
  name,
  type = "text",
  label,
}: {
  name: string;
  type: string;
  label: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (name in errors) {
    console.log("Ooopsie error!", errors);
  }

  return (
    <div className="InputText">
      <div className="LabelContainer">
        <label htmlFor={name}>{label}</label>
        <p>
          {name in errors && <span role="alert">Valid email required</span>}
        </p>
      </div>
      <input
        id={name}
        type={type}
        placeholder="email@company.com"
        aria-invalid={name in errors ? "true" : "false"}
        {...register(name, { required: true })}
      />
    </div>
  );
}
