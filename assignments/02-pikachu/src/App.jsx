import Floor from "./components/Floor";
import Pikachu from "./components/Pikachu";

const App = () => {
  return (
    <>
      <div className="app-wrapper">
        <Floor>
          <Pikachu />
        </Floor>
      </div>
    </>
  );
};

export default App;
