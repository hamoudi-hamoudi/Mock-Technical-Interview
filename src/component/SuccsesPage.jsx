import img from "../assets/img.png";
import "./succsesPage.css";

function SuccesPage() {
  return (
    <div className=".container-succses">
      <div>
        <img src={img} alt="img" />
      </div>
      <p className="user-amount">You selected 4 out of 5</p>

      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give us rating. <br />
        If you ever need more support. don't hesitateyo get in touch!
      </p>
    </div>
  );
}

export default SuccesPage;
