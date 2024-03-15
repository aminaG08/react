import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  //function changeColor(color) {
  //  setColor(color);
  //}
  return (
    <div id="main" style={{ backgroundColor: color }}>
      <h1>Background changer app</h1>
      <div>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("purple")}>purple</button>
        <button onClick={() => setColor("orange")}>orange</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
      </div>
    </div>
  );
}

export default App;
