import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='loginPage'>
    <div className='container con2'>
      <div className='header'>
        <div className='text'> Login</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="mail.png" alt="" />
          <input type="Email"  placeholder= "Email id"/>
        </div>

        <div className="input">
          <img src="password.png" alt="" />
          <input className='inputpass' type="Password" placeholder='Password' />
        </div>
        <div className="forgotpassword">Lost Password? <span>click here</span></div>
        <div className='submit-container'>
          <div className='submit'>Signup</div>
          <div className='submit'>Login
          </div>
        </div>
      </div>
    </div>
    <div className='loginImage'>
      <img src="foood.png" alt=""  />
    </div>
    </div>
  )
}

export default Login