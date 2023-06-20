import "./App.css";
import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";
import { LightColor } from "./LightColor";

function App() {
  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight lightColor={LightColor} />
          </div>
          <div className="right">
            <ClassTrafficLight lightColor={LightColor} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
