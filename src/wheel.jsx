import { useState } from "react";
import "./Wheel.css";

function Wheel({ title }) {
  const [achieve, setAchieve] = useState(0);

  const handleChange = (e) => {
    setAchieve(e.target.value);
  };

  let color = `hsl(${0 + achieve}, 71%, 34%)`;

  let gradient = `conic-gradient(white ${
    360 - achieve * 3.6
  }deg, hsla(0, 0%, 100%, 0%) ${360 - achieve * 3.6}deg)`;

  return (
    <>
      <h2 id="title">{title}</h2>
      <div id="wheelContainer">
        <div id="coloredWheel" style={{ backgroundColor: color }}>
          {" "}
          <div id="whiteWheel">
            <h2 id="percentageDisplay">{achieve} %</h2>
          </div>
        </div>
        <div
          id="maskWheel"
          style={{
            background: gradient,
          }}
        ></div>
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

export default Wheel;
