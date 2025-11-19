import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login-container'>
      <h2>Login</h2>

      <input type="text" 
      placeholder="Enter Username"
      className="login-input"
      />

      <input
      type="password"
      placeholder='Enter password'
      className='login-input'
   />

    <button className='login-btn'>Login</button>

    </div>
  );
};

export default Login