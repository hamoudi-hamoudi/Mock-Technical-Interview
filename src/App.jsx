import "./App.css";
import RatingPage from "./component/RatingPage";
import SuccesPage from "./component/SuccsesPage";
import { useState } from "react";
function App() {
  const [isRated, setIsRated] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);

  return (
    <>
      {isRated ? (
        <SuccesPage ratingValue={ratingValue} />
      ) : (
        <RatingPage setIsRated={setIsRated} setRatingValue={setRatingValue} />
      )}
    </>
  );
}

export default App;
