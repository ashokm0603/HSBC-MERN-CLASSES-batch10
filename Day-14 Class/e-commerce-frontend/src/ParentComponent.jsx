import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
  let empDetails = {
    name: "sai",
    salary: 50000,
    role: "Developer",
  };


  return (
    <div>
      ParentComponent
      <ChildComponent data={empDetails} uiTechnologies={props.skills} />
    </div>
  );
};

export default ParentComponent;
