import React, { useState } from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:5000/api/auth/register", user);
      toast.success("register successfully");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("failed to register ");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <h1>Register</h1>
          <label htmlFor="">Name :</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <br />
          <br />
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter Email"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="admin@123"
          />{" "}
          <br />
          <br />
          <button type="submit">Register</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
