/* eslint-disable no-unused-vars */
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [resume, setResume] = useState("");

  const handSubmit = (e) => {
    e.preventDefault()
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(dob);
    console.log(gender);
    console.log(skills);
    console.log(address);
    console.log(state);
    console.log(resume);
  };

  //function used to target gender input values
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  // function used to target skills inputs

  const handleSkills = (e) => {
    setSkills([...skills, e.target.value]);
  };

  //function used to target states

  const handleState = (e) => {
    setState(e.target.value);
  };

  return (
    <form action="" onSubmit={handSubmit}>
      <fieldset>
        <h1>Job Application</h1>
        <label htmlFor="">Name </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Name"
        />{" "}
        <br />
        <br />
        <label htmlFor=""> password </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Create Password "
        />{" "}
        <br />
        <br />
        <label htmlFor=""> Email </label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email "
        />{" "}
        <br />
        <br />
        <label htmlFor=""> DOB </label>
        <input
          type="date"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor=""> Gender </label>
        <input
          type="radio"
          onChange={handleGender}
          value="male"
          name="gender"
        />{" "}
        Male
        <input
          type="radio"
          onChange={handleGender}
          value="female"
          name="gender"
        />{" "}
        Female <br />
        <br />
        <label htmlFor=""> Skills </label>
        <input type="checkbox" value="Node js" onChange={handleSkills} /> Node
        Js
        <input type="checkbox" value="React Js" onChange={handleSkills} /> React
        JS
        <input type="checkbox" value="Express" onChange={handleSkills} />{" "}
        Express
        <input type="checkbox" value="MongoDb" onChange={handleSkills} />{" "}
        MongoDB <br />
        <br />
        <label htmlFor="">Address</label>
        <textarea
          name=""
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          rows={4}
          cols={50}
          id=""
        ></textarea>
        <br />
        <br />
        <label htmlFor="">State</label>
        <select name="" id="" onChange={handleState}>
          <option value="">Choose State</option>
          <option value="Andrapradesh">AP</option>
          <option value="Karnataka">KA</option>
          <option value="Telanga">TL</option>
          <option value="Kerala">KL</option>
          <option value="Maharashtra">MA</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Resume</label>
        <input
          type="file"
          onChange={(e) => {
            setResume(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Register</button>
        <button type="reset">Cancel</button>
      </fieldset>
    </form>
  );
};

export default Register;
