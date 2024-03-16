import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import CartPage from "./components/Cart";
 
import Payment from "./components/Payments";
import Landing from "./components/Landing/Landing";
import FirstScreen from "./components/Landing/FirstScreen";
import Products from "./components/Productcard";
// import MenuItem from "./components/MenuItems";
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { UserProvider } from './components/Context/UserContext ';
import Items from "./components/Items/Items";
import Checkout from "./components/checkout/Checkout";
function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider> {/* Wrap the entire application with CartProvider */}
     <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment />} />
          <Route path="/item" element={<Items />} />
          <Route path="/" exact element={<Landing />} />
          <Route path="/try" exact element={<FirstScreen />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* <Route path="/menu-items" element={<MenuItem />} /> */}
          <Route path="/signup" element={<Signup />}></Route>
           <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;