import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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
    console.log(product);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    saveCartItemsToStorage(updatedCartItems);
  };
  

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); // Remove cart items from localStorage
    console.log(cartItems);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
