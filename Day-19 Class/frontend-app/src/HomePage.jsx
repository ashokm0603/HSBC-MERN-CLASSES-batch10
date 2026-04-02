import React, { useContext } from 'react'
import { LoginContext } from './App';

 const HomePage = () => {

    const {loginDetails}=useContext(LoginContext)
  return (
    <div>
        <h1 align="center">HomePage Component</h1>
        <h2>
            Name: {loginDetails.name} <br />
            Password: {loginDetails.password}
        </h2>
    </div>
  )
}
export default HomePage;