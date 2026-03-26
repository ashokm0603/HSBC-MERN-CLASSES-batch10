/* eslint-disable no-unused-vars */
import { useState } from "react";

const CounterApp = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Increment
      </button>
      Count: {count}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};
export default CounterApp;
