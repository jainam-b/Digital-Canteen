import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import './Signup.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signUp, logIn } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handlenavigatelogin = () => {
    let path = `/login`;
    navigate(path);
  };

  const handleSignUp = () => {
    // Perform signup action
    signUp({ username: name, email, password });
    handlenavigatelogin()
  };

  const handleLogin = () => {
    // Perform login action
    logIn({ email, password });
  };

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
              <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="input">
              <input type="email" placeholder='Email id' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input">
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='submit-container'>
              <div className='submit' onClick={handleSignUp}>Signup</div>
              <div className='submit' onClick={handlenavigatelogin}>Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
