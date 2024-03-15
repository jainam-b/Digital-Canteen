import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const saveCartItemsToStorage = (items) => {
    // Save cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    saveCartItemsToStorage(updatedCartItems);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.productId !== productId);
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
    </CartContext.Provider>
  );
};
