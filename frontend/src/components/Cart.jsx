// CartPage.js
import React from 'react';
import { useCart } from './Context/CartContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Itemcard from './Items/Itemcard';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  
  return (
    <div>
     
     
      <button onClick={clearCart}>Clear Cart</button>
      <div>
      <div className='Items'>
        
        <h3>Cart Items</h3>
        <div className='productMenu'>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <Itemcard
                key={index}
                productId={item._id}
               
                image="sandwich.png" // Replace with the actual image URL
                productName={item.productName}
                // rating={item.productName} // Assuming rating is a property of the product object
                price={`₹${item.price}`} // Assuming price is a property of the product object
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
        {/* <div className='moreProduct text-white'>
        <Button variant=" " onClick={()=>{}} className='Cart' > More Products
          </Button>
          <div>
            <ArrowForwardIosIcon className='ArrowForwardIosIcon' />
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default CartPage;
