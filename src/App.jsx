import { useState } from "react";
import "./App.css";

function App() {
  const [achieve, setAchieve] = useState(0);

  const handleChange = (e) => {
    setAchieve(e.target.value);
  };

  return (
    <>
      <div id="coloredWheel">
        <h2>{achieve} %</h2>
      </div>
      <input
        id="rangeInput"
        type="range"
        min={0}
        max={100}
        defaultValue={0}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}

export default App;
