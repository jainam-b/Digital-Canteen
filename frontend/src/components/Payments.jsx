import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [orderId, setOrderId] = useState('');

  const createOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3001/pay/order', {
        amount: 50000, 
        currency: 'INR',
      });
      setOrderId(response.data.id);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div>
      <button onClick={createOrder}>Create Order</button>
      {orderId && <p>Order ID: {orderId}</p>}
      
    </div>
  );
};

export default Payment;
