import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Assuming your backend API endpoint for fetching cart items is '/cart'
        const response = await axios.get('http://localhost:3000/order/menus')
        // console.log(response);
        if (response.data) { // Check if items array is defined
          setCartItems(response.data); 
         
        }
         
           
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems && cartItems.map((item, index) => ( // Add a check for cartItems
          <li key={index}>
            <div>{item._id}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
