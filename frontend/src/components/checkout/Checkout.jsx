import { useEffect, useState } from "react";
import "../Productcard/productcard.css";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { useCart } from "../Context/CartContext";
import NavBar from "../NavBar/NavBar";

const Checkout = () => {
  const { orderedItems } = useCart(); // Change cartItems to orderedItems
  const orderIds = Math.floor(Math.random() * 1000000) + 1;

  // Calculate total amount
  const totalAmount = orderedItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

  return (
    <>
      <NavBar />
      <div className="container order-summary">
        <p className="heading-text">Order Summary</p>
        <p className="order-confirm-info">
          <TbDiscountCheckFilled color="green" size="1.5rem" />
          Your Order is Confirmed!
        </p>
        <img className="display-img-md mtop10 mbottom10" />
        {/* <p>Sit back while we deliver it in less than 30 minutes!!</p> */}
        <p className="heading-text mtop20">Order Details</p>
        <p className="mbottom10">Order ID: {orderIds}</p>

        <div className="order-summary-details">
          <div className="cart-order-summary">
            {orderedItems.map((item, index) => (
              <div key={index} className="cart-summary-item">
                <p className="item-name">{item.productName}</p>
                <p>{item.description}</p>
                <p>₹ {item.price}</p>
              </div>
            ))}
            <div className="total-bill">
              <h3 className="subheading-text">To Pay</h3>
              <h3 className="heading-text">₹ {totalAmount}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
