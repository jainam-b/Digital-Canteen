import React,{ useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import CartPage from "./components/Cart/Cart";
import Payment from "./components/Payments";
import Landing from "./components/Landing/Landing";
import FirstScreen from "./components/Landing/FirstScreen";
import { AuthProvider } from './components/Context/AuthContext';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { UserProvider } from './components/Context/UserContext ';
import Items from "./components/Items/Items";
import Checkout from "./components/checkout/Checkout";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import ProductCard from "../src/components/Productcard/ProductCard"
import About from "./components/About/About";


function App() {
  const [count, setCount] = useState(0);

  return (
    <React.StrictMode>
      <CartProvider>
        <AuthProvider>
          <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/payment" element={<Payment />} />
                <Route path="/item" element={<Items />} />
                <Route path="/" exact element={<Landing />} />
                <Route path="/try" exact element={<Checkout />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/order-summary" element={<OrderSummary />} />
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </AuthProvider>
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;
