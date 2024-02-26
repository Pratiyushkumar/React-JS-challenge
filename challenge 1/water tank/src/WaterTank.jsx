import "./watertank.css";

const WaterTank = () => {
  return (
    <div className="container">
      <button className="add__button">Add Water</button>
      <button className="remove__button">Remove Water</button>
      <div className="water__tank"></div>
    </div>
  );
};

export default WaterTank;
