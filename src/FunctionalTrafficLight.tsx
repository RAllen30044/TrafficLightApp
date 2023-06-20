import { color } from "./LightColor";
import { useState } from "react";
interface colorProps {
  lightColor: color;
}

export const FunctionalTrafficLight = ({ lightColor }: colorProps) => {
  const [lightColorIndex, setLightColorIndex] = useState(0);

  const nextLight = () => {
    if (lightColorIndex > 0) {
      setLightColorIndex(lightColorIndex - 1);
    } else {
      setLightColorIndex(2);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={`circle ${
            lightColor[lightColorIndex] === "red" ? "red" : "black"
          }`}
        ></div>
        <div
          className={`circle ${
            lightColor[lightColorIndex] === "yellow" ? "yellow" : "black"
          }`}
        ></div>
        <div
          className={`circle ${
            lightColor[lightColorIndex] === "green" ? "green" : "black"
          }`}
        ></div>
      </div>
      <button className="next-state-button" onClick={nextLight}>
        Next State
      </button>
    </div>
  );
};
