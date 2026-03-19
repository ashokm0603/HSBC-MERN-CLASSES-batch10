import { useState } from "react";

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    password: "",
    address: "",
  });

  const handelChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerDetails);
  };

  return (
    <div id="form-container">
      <form action="" onSubmit={handleRegister}>
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
            SigUp Form
          </h1>
          <label htmlFor="">Name </label>
          <input
            type="text"
            name="name"
            onChange={handelChange}
            placeholder="Enter ur Name"
          />
          <br />
          <br />
          <label htmlFor="">Email </label>
          <input
            type="email"
            name="email"
            onChange={handelChange}
            placeholder="Enter ur email"
          />
          <br />
          <br />
          <label htmlFor="">Phone </label>
          <input
            type="tel"
            name="phone"
            onChange={handelChange}
            placeholder="+91"
          />
          <br />
          <br />
          <label htmlFor="">Gender </label>
          <input
            type="radio"
            name="gender"
            onChange={handelChange}
            value="male"
          />
          Male
          <input
            type="radio"
            name="gender"
            onChange={handelChange}
            value="female"
          />
          Female
          <br />
          <br />
          <label htmlFor="">State </label>
          <select name="state" onChange={handelChange} id="">
            <option defaultValue=""> choose State</option>
            <option value="Karnataka"> Karnataka</option>
            <option value="Kerala"> Kerala</option>
            <option value="Andra pradesh"> Andra pradesh</option>
            <option value="Telangana"> Telangana</option>
            <option value="Punjab"> Punjab</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Create password </label>
          <input
            type="password"
            name="password"
            onChange={handelChange}
            placeholder="Create new Password"
          />
          <br />
          <br />
          <label htmlFor="">Address </label>
          <textarea
            name="address"
            onChange={handelChange}
            rows={3}
            cols={40}
            id=""
            placeholder="Enter Full Address"
          >
            {" "}
          </textarea>
          <br />
          <br />
          <button type="submit">Sign-Up</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
