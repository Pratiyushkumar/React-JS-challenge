import { useRef, useState } from "react";
import "./App.css";
import WaterTank from "./WaterTank";

function App() {
  const [waterLevel, setWaterLevel] = useState(0);
  const waterTank1Ref = useRef(null);
  const waterTank2Ref = useRef(null);
  const waterTank3Ref = useRef(null);

  const handleAddWaterToTank = (e) => {
    console.log("adding water to tank");
    console.log(waterTankRef);
    console.log(waterTankRef.current.dataset.tank);
  }

  const handleEmptyWaterFromTank = (e) => {
    console.log("emptying the tank");
  }

  return (
    <>
      <h1 style={{ fontFamily: "monospace" }}>Water Balancer</h1>
      <div className="water__tank__container">
        <WaterTank tank={1}
          addWater={handleAddWaterToTank}
          emptyTank={handleEmptyWaterFromTank}
          level={waterLevel}
          waterTankRef={waterTank1Ref} />

        <WaterTank tank={2}
          addWater={handleAddWaterToTank}
          emptyTank={handleEmptyWaterFromTank}
          level={waterLevel}
          waterTankRef={waterTank2Ref} />

        <WaterTank tank={3}
          addWater={handleAddWaterToTank}
          emptyTank={handleEmptyWaterFromTank}
          level={waterLevel}
          waterTankRef={waterTank3Ref} />
      </div>

    </>
  );
}

export default App;
