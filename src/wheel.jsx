import "./Wheel.css";

function Wheel({ title, percent }) {
  const handleChange = (e) => {
    setAchieve(e.target.value);
  };

  let color = `hsl(${0 + percent}, 71%, 34%)`;

  let gradient = `conic-gradient(white ${
    360 - percent * 3.6
  }deg, hsla(0, 0%, 100%, 0%) ${360 - percent * 3.6}deg)`;

  return (
    <>
      <h2 id="title">{title}</h2>
      <div id="wheelContainer">
        <div id="coloredWheel" style={{ backgroundColor: color }}>
          {" "}
          <div id="whiteWheel">
            <h2 id="percentageDisplay">{percent} %</h2>
          </div>
        </div>
        <div
          id="maskWheel"
          style={{
            background: gradient,
          }}
        ></div>
      </div>
    </>
  );
}

export default Wheel;
