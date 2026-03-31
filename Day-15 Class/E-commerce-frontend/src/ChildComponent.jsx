import React from 'react'

const ChildComponent = (props) => {

    console.log(props.data.name);
    
  return (
    <div>ChildComponent
        <h1>Name : {props.data.name}</h1>
        <h1>Role : {props.data.role}</h1>
        <h1>Salary : {props.data.salary}</h1>

        <h1>Skills: {props.uiTechnologies}</h1>
    </div>
  )
}

export default ChildComponent