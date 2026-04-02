import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <h1>Name {props.user.name}</h1>
      <h1> Password{props.user.password}</h1>
    </div>
  );
};

export default ChildComponent;
