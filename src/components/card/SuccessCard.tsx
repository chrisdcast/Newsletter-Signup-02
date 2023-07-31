import "./Card.css";
import "./SuccessCard.css";
import Button from "./Button";

export default function SuccessCard({ email }: { email: string }) {
  return (
    <div className="Card SuccessCard">
      <div className="SuccessCardBody">
        <div className="SuccessImageContainer">
          <img alt="Newsletter subscribe success checkmark"></img>
        </div>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button text="Dismiss message" linkTo="/" />
    </div>
  );
}
