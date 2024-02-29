import "./watertank.css";

const WaterTank = ({addWater, emptyTank, level, tank, waterTankRef}) => {
  return (
    <>
      <div className="container">
        <button className="add__button" onClick={()=>addWater()}>Add Water</button>
        <button className="remove__button"  onClick={()=>emptyTank()}>Remove Water</button>
        <div className="water__tank" data-tank={tank} ref={waterTankRef}></div>
        <p className="percentage">{level}%</p>
      </div>
    </>
  );
};

export default WaterTank;
