import React, { useContext } from 'react';
import { AuthContext } from './path/to/AuthContext';

const LogoutButton = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut(); // Call the logOut function from AuthContext
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
