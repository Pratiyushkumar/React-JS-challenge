import "./App.css";
import WaterTank from "./WaterTank";

function App() {
  return (
    <>
      <h1 style={{fontFamily:"monospace"}}>Water Balancer</h1>
      <div className="water__tank__container">
        <WaterTank />
        <WaterTank />
        <WaterTank />
      </div>
    </>
  );
}

export default App;
