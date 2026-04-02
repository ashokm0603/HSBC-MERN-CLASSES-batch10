/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useState } from "react";
import  SignIn  from "./SignIn";
import  HomePage  from "./HomePage";
// import ReducerRegisterComponent from "./ReducerRegisterComponent";
// import GrandParent from "./GrandParent";
// import { ThemeContext } from "./provider/ThemeContext";
// import Child from "./Child";
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { count: state.count - 1 };

//     case "reset":
//       return { count: 0 };

//     default:
//       return state;
//   }
// }

// eslint-disable-next-line react-refresh/only-export-components
export const LoginContext = createContext();

const App = () => {
  // const initialState = { count: 0 };
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [theme, setTheme] = useState("light");

  const [loginDetails, setLoginDetails] = useState({
    name: "",
    password: "",
  });
  return (
    // <div>
    //   <h2>Count :{state.count}</h2>
    //   <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    //   <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    //   <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

    //   <ReducerRegisterComponent/>

    //   <GrandParent/>
    // </div>

    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <Child/>
    // </ThemeContext.Provider>

    <LoginContext.Provider value={{ loginDetails, setLoginDetails }}>
      <SignIn />
      <HomePage />
    </LoginContext.Provider> 
  );
};

export default App;
