import "./styles.css";
import { useState } from "react";

export default function App() {
  const NUMBER_OF_STARS = 5;
  const starsArray = [...Array(NUMBER_OF_STARS).keys()];
  console.log("starsArray", starsArray);
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(false);
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <div className="stars-container">
        {starsArray.map((el) => (
          <div
            className={`star ${
              hovered
                ? hovered >= el
                  ? "selected"
                  : ""
                : selected >= el && "selected"
            }`}
            key={el}
            onClick={() => setSelected(el)}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(false)}
          ></div>
        ))}
      </div>
    </div>
  );
}
