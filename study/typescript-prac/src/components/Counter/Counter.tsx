import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [unit, setUnit] = useState<number>(1);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUnit(Number(e.target.value));
  };

  // const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUnit(Number(e.target.value));
  // };

  // const handleChangeUnit = (e: { target: { value: string } }) => {
  //   setUnit(Number(e.target.value));
  // };

  // const handleChangeUnit: (e: { target: { value: string } }) => void = (e) => {
  //   setUnit(Number(e.target.value));
  // };

  return (
    <div>
      <CounterDisplay value={count} />

      <input
        value={unit}
        onChange={handleChangeUnit}
        type="number"
        placeholder="숫자입력"
      />

      <div className="flex">
        <CounterButton onClick={decrement}>[-]</CounterButton>
        <CounterButton onClick={increment}>[+]</CounterButton>
      </div>
    </div>
  );
}

export default Counter;
