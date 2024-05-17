import "../styles/floor.css";

const Floor = ({ children }) => {
  const cells = Array.from({ length: 100 }, (_, index) => (
    <div key={index} className="cell"></div>
  ));

  return (
    <div className="floor">
      {cells}
      {children}
    </div>
  );
};

export default Floor;
