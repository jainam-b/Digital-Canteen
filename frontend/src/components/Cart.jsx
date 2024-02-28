import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Assuming your backend API endpoint for fetching cart items is '/cart'
        const response = await axios.get('http://localhost:3001/cart/cart', {
          params: {
            userId: '65d80bea45cb8407e8765bd3' // Replace 'user_id_here' with the actual user ID
          }
        });
        setCartItems(response.data.items); 
        console.log(response.data.items);// Assuming cart items are in 'items' array in the response
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
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>{item._id}</div>
            <div>{item.price}</div>
            <div>{item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
