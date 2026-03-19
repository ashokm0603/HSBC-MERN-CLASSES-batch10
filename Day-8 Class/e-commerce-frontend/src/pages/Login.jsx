import React, { useState } from "react";
const Login = () => {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  };

  const handleChange=(e)=>{

    setFormData({...formData, [e.target.name]:e.target.value})

  }

  return (
    <div id="form-container">
  
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <h1
            style={{
              textAlign: "center",
              color: "magenta",
              textShadow: "3px 3px 3px black",
              fontStyle: "italic",
              textDecoration: "underline wavy red",
            }}
          >
            SigIn Form
          </h1>
          <label htmlFor="">Username </label>
          <input type="text" name='username' onChange={handleChange}  placeholder="Enter Username" />
          <br />
          <br />
          <label htmlFor="">Password </label>
          <input type="password" name="password" onChange={handleChange} placeholder="Enter password" />
          <br />
          <br />
          <button type="submit">Sign-In</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
