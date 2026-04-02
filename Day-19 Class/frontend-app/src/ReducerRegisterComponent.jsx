/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

const ReducerRegisterComponent = () => {
  const initialState = {
    name: "",
    password: "",
  };

  function reducer(state, action) {
    return { ...state, [action.field]: action.value };
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <form action="">
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(e) => dispatch({ field: "name", value: e.target.value })}
          placeholder="Enter name"
        />
        <br />
        <br />
        <label htmlFor="">Create Password</label>
        <input
          type="password"
          onChange={(e) =>
            dispatch({ field: "password", value: e.target.value })
          }
          placeholder="Enter Password"
        />
      </form>

      <h3>Name :{state.name}</h3>
      <h3>Password :{state.password}</h3>
    </div>
  );
};

export default ReducerRegisterComponent;
