import React, { useContext } from 'react'
import { LoginContext } from './App'

 const SignIn = () => {
   const {loginDetails, setLoginDetails }= useContext(LoginContext)

  const  handleChange=(e)=>{
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
   }
  return (
    <div>
        <h1 align="center">SingIn Component</h1>
        <input type="text" placeholder='Enter name' name="name" onChange={handleChange} /> <br /><br />
        <input type="password" placeholder='Enter password' name="password" onChange={handleChange} />
    </div>
  )
}

export default SignIn