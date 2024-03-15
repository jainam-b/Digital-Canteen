// CartPage.js
import React from 'react';
import { useCart } from './Context/CartContext';
 

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  // console.log(cartItem);
  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.productName}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
