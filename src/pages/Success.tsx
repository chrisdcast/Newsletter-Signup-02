import SuccessCard from "../components/card/SuccessCard";
import "./Success.css";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const { userEmail } = location.state;
  return (
    <div className="Success">
      <SuccessCard email={userEmail} />
    </div>
  );
}
