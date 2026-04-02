/* eslint-disable no-unused-vars */
import { useRef } from "react";

const UnControlledForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dobRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( "name :",nameRef.current.value);
    console.log("Email :",emailRef.current.value);
    console.log("password :",passwordRef.current.value);
    console.log("DOB :", dobRef.current.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <h1>Register</h1>
        <label htmlFor="">Name</label>
        <input type="text" ref={nameRef} placeholder="Enter Name" />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" ref={passwordRef} placeholder="Enter Password" />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" ref={emailRef} placeholder="Enter Email" />
        <br />
        <br />
        <label htmlFor="">Dob </label>
        <input type="date" ref={dobRef} />
        <br />
        <br />

        <button type="submit">Sign-UP</button>
        <button type="reset">Cancel</button>
      </fieldset>
    </form>
  );
};

export default UnControlledForm;
