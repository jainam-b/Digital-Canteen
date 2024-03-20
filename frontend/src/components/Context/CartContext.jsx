import React, { createContext, useContext, useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // State variable to control alert visibility
  const [orderedItems, setOrderedItems] = useState([]); // New state for ordered items
  const [orderId, setOrderId] = useState(null); // State variable for order ID

  useEffect(() => {
    // Load cart items from localStorage only on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    
    // Load ordered items and order ID from localStorage on component mount
    const storedOrderedItems = localStorage.getItem('orderedItems');
    const storedOrderId = localStorage.getItem('orderId');
    if (storedOrderedItems) {
      setOrderedItems(JSON.parse(storedOrderedItems));
    }
    if (storedOrderId) {
      setOrderId(storedOrderId);
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount
  

  const saveCartItemsToStorage = (items) => {
    // Save cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const generateOrderId = () => {
    // Generate a unique order ID
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.productName === product.productName);

    if (existingItemIndex !== -1) {
      // Item already exists in the cart, increase its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += product.quantity || 1; // Increase quantity by 1 or product.quantity
      setCartItems(updatedCartItems);
      saveCartItemsToStorage(updatedCartItems);
    } else {
      // Item does not exist in the cart, add it
      const updatedCartItems = [...cartItems, product];
      setCartItems(updatedCartItems);
      saveCartItemsToStorage(updatedCartItems);
    }

    setShowAlert(true); // Set showAlert to true when item is added to cart

    // Hide the alert after 2 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const placeOrder = () => {
    // Generate and set the order ID
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    // Move cart items to ordered items and clear the cart
    const updatedOrderedItems = [...orderedItems, ...cartItems];
    setOrderedItems(updatedOrderedItems);
    setCartItems([]);

    // Save ordered items and order ID to localStorage
    localStorage.setItem('orderedItems', JSON.stringify(updatedOrderedItems));
    localStorage.setItem('orderId', newOrderId);

    // Remove cart items from localStorage
    localStorage.removeItem('cartItems');
  };

  const removeFromCart = (productName) => {
    const updatedCartItems = cartItems.filter((item) => item.productName !== productName);
    setCartItems(updatedCartItems);
    saveCartItemsToStorage(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); // Remove cart items from localStorage
  };

  const updateCartItemQuantity = (itemName, newQuantity) => {
    // Find the item in the cartItems array and update its quantity
    const updatedCartItems = cartItems.map((item) => {
      if (item.productName === itemName) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
  
    setCartItems(updatedCartItems);
    saveCartItemsToStorage(updatedCartItems); // Save updated cart items to local storage
  };
  

  return (
    <CartContext.Provider value={{ cartItems, orderedItems, orderId, setOrderedItems, addToCart, placeOrder, removeFromCart, clearCart, updateCartItemQuantity }}>
      {children}
      {/* Display the alert when showAlert is true */}
      <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 999, marginTop: "1%", textAlign: 'right' }}>
        {showAlert && (
          <Alert severity="success" onClose={() => setShowAlert(false)}>Item added successfully!</Alert>
        )}
      </div>
    </CartContext.Provider>
  );
};
