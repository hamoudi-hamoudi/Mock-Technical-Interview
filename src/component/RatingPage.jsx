import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import "./ratingPage.css";

function RatingPage({ setIsRated, setRatingValue }) {
  const ratingArray = [1, 2, 3, 4, 5];
  const [rateAmount, setRateAmount] = useState(null);
  const [hoverdRate, setHoverdRate] = useState(null);
  const handleMouseOver = (e) => {
    setHoverdRate(e);
  };
  const handleMouseOut = () => {
    setHoverdRate(null);
  };
  const handleClick = (e) => {
    setRateAmount(e);
  };
  const handleBtnClick = () => {
    if (rateAmount) {
      setIsRated(true);
      setRatingValue(rateAmount);
    }
  };
  const RenderRate = ratingArray.map((e, i) => {
    const isLighted = hoverdRate >= e || rateAmount >= e;
    const className = isLighted ? "circle logo light" : "circle logo";
    return (
      <span
        key={i}
        className={className}
        onMouseOver={() => handleMouseOver(e)}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick(e)}
      >
        {e}
      </span>
    );
  });

  return (
    <div className="container">
      <span className="circle">
        <BsStarFill className="logo" />
      </span>

      <h1>how did we do ?</h1>
      <p>
        please let us know how we did with your support requests. All feedback
        is appreciated to help us improve our offering
      </p>
      <div className="ratings">{RenderRate}</div>

      <button className="btn" onClick={handleBtnClick}>
        SUBMIT
      </button>
    </div>
  );
}

export default RatingPage;
