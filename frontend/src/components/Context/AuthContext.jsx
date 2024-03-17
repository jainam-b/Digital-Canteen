import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const AuthContext = createContext();

// Create provider component
export const AuthProvider = ({ children }) => {
  // State to store user data
  const [user, setUser] = useState(null);

  // Function to sign up
  const signUp = async (userData) => {
    console.log(userData);
    try {
      const response = await axios.post('http://localhost:3000/user/signup', userData);
      // Handle response
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  // Function to log in
  // Function to log in
const logIn = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/user/login', userData);
      // Set user data in state
      setUser(response.data.user);
      // Store token in local storage
      localStorage.setItem('token', response.data.token);
      return response.data; // Return response data
    } catch (error) {
      // Throw the error
      throw error;
    }
  };
  

  // Function to log out
  const logOut = () => {
    // Remove user data from state
    setUser(null);
    // Remove token from local storage
    localStorage.removeItem('token');
  };

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    // Check if user data exists
    return user !== null;
  };

  // Function to load user data on component mount
  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      // Make request to get user data using token
      axios.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        // Set user data in state
        setUser(response.data.user);
      }).catch(error => {
        // Handle error
        console.error(error);
      });
    }
  }, []);

  // Context value
  const value = {
    user,
    signUp,
    logIn,
    logOut,
    isAuthenticated
  };

  // Return provider with value
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
