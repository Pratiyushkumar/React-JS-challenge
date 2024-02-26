import "./watertank.css";

const WaterTank = () => {
  return (
    <div className="container">
      <button>Add Water</button>
      <button>Remove Water</button>
      <div className="water__tank"></div>
    </div>
  );
};

export default WaterTank;
