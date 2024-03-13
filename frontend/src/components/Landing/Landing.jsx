import React from 'react'
import FirstScreen from './FirstScreen'
import Address from './Address'
import Items from '../Items/Items'
import FoodItem from '../FoodItem/FoodItem';
import Feedback from '../Feedback/Feedback';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';


function Landing() {

  return (
    <div>  
      {/* <NavBar/> */}
<FirstScreen/>
 <Address/>
 <Items/>
<FoodItem/>
  <Feedback/> 
   <Subscribe/>
   <Footer/>
    </div>
  )
}

export default Landing