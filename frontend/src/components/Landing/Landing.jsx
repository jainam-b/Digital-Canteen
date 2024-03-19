import React from "react";
import FirstScreen from "./FirstScreen";
import Address from "./Address";
import Items from "./LandingItems";
import FoodItem from "../FoodItem/FoodItem";
import Feedback from "../Feedback/Feedback";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


import "./Landing.css";

function Landing() {
  return (
    
    <div className="container">
      <NavBar />

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
