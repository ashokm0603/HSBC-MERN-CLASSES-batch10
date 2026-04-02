/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/use-memo */

import { useMemo, useState } from "react";
// import Register from "./Register";
// import UnControlledForm from "./UnControlledForm";

const App = () => {
  const [num, setNum] = useState(1);
  let fact = 1;

  const findFactorial = () => {};

  useMemo(() => {
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    console.log(fact);
  }, [num]);

  return (
    <div>
      <h1>Calculate (Find Factorial of the Number)</h1>
      <hr />

      <div id="container">
        <input
          type="text"
          onChange={(e) => {
            let count = e.target.value;
            count = Number(count);
            setNum(count);
          }}
          placeholder="Enter Number to find Factorial"
        />

        <button onClick={findFactorial}> Find Factorial</button>
        <span>
          Factorial Of Number {num} 
        </span>
      </div>
      {/* <h2>Controlled Form</h2>
     <Register/>

     <h2>Uncontrolled Form</h2>
     <UnControlledForm/> */}
    </div>
  );
};

export default App;
