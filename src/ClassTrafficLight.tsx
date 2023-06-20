import { Component } from "react";
import { color } from "./LightColor";

interface colorProps {
  lightColor: color;
}

export class ClassTrafficLight extends Component<colorProps> {
  state = {
    lightColorIndex: 0,
  };

  nextLight = () => {
    const { lightColorIndex } = this.state;
    if (lightColorIndex > 0) {
      this.setState({ lightColorIndex: lightColorIndex -1 });
    } else {
      this.setState({ lightColorIndex: 2 });
    }
  };

  render() {
    const { lightColor } = this.props;
    const { lightColorIndex } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
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
        <button className="next-state-button" onClick={this.nextLight}>
          Next State
        </button>
      </div>
    );
  }
}
