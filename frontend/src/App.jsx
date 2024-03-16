import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import CartPage from "./components/Cart";
 
import Payment from "./components/Payments";
import Landing from "./components/Landing/Landing";
import FirstScreen from "./components/Landing/FirstScreen";
import Products from "./components/Productcard";
// import MenuItem from "./components/MenuItems";
import Items from "./components/Items/Items";

function App() {
  return (
    <CartProvider> {/* Wrap the entire application with CartProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment />} />
     
          <Route path="/" exact element={<Landing />} />
          <Route path="/try" exact element={<FirstScreen />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/menu-items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
