import React, { useState, useEffect } from 'react';
 
import Mobile from '../NavBar/MobileNav';
import NavBar from '../NavBar/NavBar';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Consider devices with width less than 768 pixels as mobile
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <p><Mobile></Mobile></p> : <p><NavBar></NavBar></p>}
    </div>
  );
}

export default App;
