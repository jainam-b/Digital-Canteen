import { useState } from 'react'
import CartItems from './components/Cart'
import Itemcard from './components/Items/Itemcard'
import Payment from './components/Payments'


import { BrowserRouter , Routes, Router, Route } from "react-router-dom";
 



 
import Landing from './components/Landing/Landing';

import FeedbackCrousel from './components/FeedbackCrousel'
import FirstScreen from './components/Landing/FirstScreen';
import Products from './components/Productcard';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Checkout from './components/checkout/Checkout';






function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
     <BrowserRouter>
         
         <Routes>
           <Route path="/payment" element={<Payment />}></Route>
           <Route path="/item" element={<Itemcard />}></Route>
 
           <Route path ="/" exact element={<Landing/>}/>
           <Route path ="/try" exact element={<FirstScreen/>}/>
           
        
           {/* <Route path="/cart" element={<CartItems />}></Route>
           <Route path="/chart" element={<Charts />}></Route> */}
 
           <Route path="/cart" element={<CartItems />}></Route>
           <Route path="/product" element={<Products />}></Route>
           <Route path="/signup" element={<Signup />}></Route>
           <Route path="/login" element={<Login />}></Route>
           <Route path="/checkout" element={<Checkout/>}></Route>
           
           {/* <Route path="/chart" element={<Charts />}></Route> */}
           
 
            
         </Routes>
       </BrowserRouter>
    </div>



  )
}

export default App






















// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartProvider } from "./components/Context/CartContext";
// import CartPage from "./components/Cart";
 
// import Payment from "./components/Payments";
// import Landing from "./components/Landing/Landing";
// import FirstScreen from "./components/Landing/FirstScreen";
// import Products from "./components/Productcard";
// import MenuItem from "./components/MenuItems";

// function App() {
//   return (
//     <CartProvider> {/* Wrap the entire application with CartProvider */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/payment" element={<Payment />} />
     
//           <Route path="/" exact element={<Landing />} />
//           <Route path="/try" exact element={<FirstScreen />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/menu-items" element={<MenuItem />} />
//         </Routes>
//       </BrowserRouter>
//     </CartProvider>
//   );
// }

// export default App;
