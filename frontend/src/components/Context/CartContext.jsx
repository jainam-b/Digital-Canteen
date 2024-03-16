import React, { createContext, useContext, useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // State variable to control alert visibility

  useEffect(() => {
    // Load cart items from localStorage only on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const saveCartItemsToStorage = (items) => {
    // Save cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    saveCartItemsToStorage(updatedCartItems);
    setShowAlert(true); // Set showAlert to true when item is added to cart

    // Hide the alert after 2 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 100000);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    saveCartItemsToStorage(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); // Remove cart items from localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
      {/* Display the alert when showAlert is true */}
<div style={{ position: 'fixed', top: 0, right: 0, zIndex: 999,marginTop:"1%", textAlign: 'right' }}>
  {showAlert && (
    <Alert severity="success" onClose={() => setShowAlert(false)}>Item added successfully!</Alert>
  )}
</div>


    </CartContext.Provider>
  );
};
