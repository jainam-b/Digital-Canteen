import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import CartPage from "./components/Cart";
import ItemCard from "./components/ItemCard";
import Payment from "./components/Payments";
import Landing from "./components/Landing/Landing";
import FirstScreen from "./components/Landing/FirstScreen";
import Products from "./components/Productcard";
import MenuItem from "./components/MenuItems";

function App() {
  return (
    <CartProvider> {/* Wrap the entire application with CartProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment />} />
          <Route path="/item" element={<ItemCard />} />
          <Route path="/" exact element={<Landing />} />
          <Route path="/try" exact element={<FirstScreen />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/menu-items" element={<MenuItem />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
