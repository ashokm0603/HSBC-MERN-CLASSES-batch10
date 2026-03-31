import React, { useState } from "react";
import LandingNav from "../components/LandingNav";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Login = () => {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:5000/api/login", formData);
      toast.success("Login Successfully");
      
      setTimeout(() => {
        navigate("/admin-home");
      }, 3000);
    } catch (error) {
      toast.error("Failed to Login ");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <LandingNav />

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
            <input
              type="text"
              required
              name="username"
              onChange={handleChange}
              placeholder="Enter Username"
            />
            <br />
            <br />
            <label htmlFor="">Password </label>
            <input
              type="password"
              required
              name="password"
              onChange={handleChange}
              placeholder="Enter password"
            />
            <br />
            <br />
            <button type="submit">Sign-In</button>
            <button type="reset">Cancel</button>
          </fieldset>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
