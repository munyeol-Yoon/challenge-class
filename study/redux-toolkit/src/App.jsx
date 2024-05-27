import { useDispatch } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { decrement, increment } from "./redux/slices/counter.slice";

function App() {
  const dispatch = useDispatch();

  const decrementByFive = () => {
    /**
     * 액션을 만들고
     * 우체부에게 전달
     */
    const action = decrement(5);
    dispatch(action);
  };

  const incrementByFive = () => {
    const action = increment(5);
    dispatch(action);
  };

  return (
    <main>
      <Display />
      <Button label="빼기 5" onClick={decrementByFive} />
      <Button label="더하기 5" onClick={incrementByFive} />
    </main>
  );
}

export default App;
