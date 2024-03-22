import React,{useState,useEffect} from "react";
import FirstScreen from "./FirstScreen";
import Address from "./Address";
import Items from "./LandingItems";
import FoodItem from "../FoodItem/FoodItem";
import Feedback from "../Feedback/Feedback";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Mobile from "../NavBar/MobileNav";


import "./Landing.css";

function Landing() {
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
    
    <div className="container">
      <div>
      {isMobile ? <p><Mobile></Mobile></p> : <p><NavBar></NavBar></p>}
    </div>

      <div>
        <FirstScreen />
      
        <Items />
        <FoodItem />
        <Feedback />
        <Subscribe />
        <Footer />
        

        
      </div>
    </div>
  );
}

export default Landing;

// import React from 'react'
// import FirstScreen from './FirstScreen'
// import Address from './Address'
// import Items from '../Items/Items'
// import FoodItem from '../FoodItem/FoodItem';
// import Feedback from '../Feedback/Feedback';
// import Subscribe from '../Subscribe/Subscribe';
// import Footer from '../Footer/Footer';

// function Landing() {

//   return (
//     <div>
//       {/* <NavBar/> */}
// <FirstScreen/>
//  <Address/>
//  <Items/>
// <FoodItem/>
//   <Feedback/>
//    <Subscribe/>
//    <Footer/>
//     </div>
//   )
// }

// export default Landing
