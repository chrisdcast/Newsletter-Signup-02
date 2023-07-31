import "./FormBody.css";
import InputText from "./InputText";
import FormButton from "./FormButton";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type UserEmail = {
  userEmail: string
};

export default function FormBody() {
  const methods = useForm<UserEmail>();
  const navigate = useNavigate();
  const { handleSubmit } = methods;


  const onSubmit: SubmitHandler<UserEmail> = (data) => {
    console.log("axios.post(BACKEND URL, data)", data);
    navigate("/success", { state: data });
  };

  return (
    <FormProvider {...methods}>
      <form className="FormBody" onSubmit={handleSubmit(onSubmit)}>
        <InputText name="userEmail" type="email" label="Email Address" />
        <FormButton text="Subscribe to monthly newsletter" />
      </form>
    </FormProvider>
  );
}
