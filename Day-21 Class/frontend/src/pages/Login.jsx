import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });


  const navigate=useNavigate()
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginUser,
      );

      console.log(response.data.accessToken);
      localStorage.setItem('accessToken',response.data.accessToken)
      toast.success("Login sccussfull");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <fieldset>
          <h1>Login</h1>
          <label htmlFor="">Email :</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="Enter username[Email]"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Password :</label> 
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
          <br />
          <br />
          <button type="submit">Login</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
