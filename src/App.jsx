import "./App.css";
import RatingPage from "./component/RatingPage";
import SuccesPage from "./component/SuccsesPage";
import { useState } from "react";
function App() {
  const [isRated, setIsRated] = useState(false);

  return (
    <>{isRated ? <SuccesPage /> : <RatingPage setIsRated={setIsRated} />}</>
  );
}

export default App;
