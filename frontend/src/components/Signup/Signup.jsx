import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='background2'>
      <div>
        <div className='container2'>
          <div className='header'>
            <div className='text'> Signup</div>
            <div className='underline'></div>
          </div>
          <div className="inputs">
            <div className="input">
              {/* <img src="person.png" alt="" /> */}
              <input type="text" placeholder='Name' />
            </div>

            <div className="input">
              {/* <img src="email.png" alt="" /> */}
              <input type="Email"  placeholder='Email id'/>
            </div>

            <div className="input">
              {/* <img src="password.png" alt="" /> */}
              <input type="Password" placeholder='Password' />
            </div>
            {/* <div className="forgotpassword">Lost Password? <span>click here</span></div> */}
            <div className='submit-container'>
              <div className='submit'>Signup</div>
              <div className='submit'>Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
