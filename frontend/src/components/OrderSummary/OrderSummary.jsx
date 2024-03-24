// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBRow
// } from "mdb-react-ui-kit";
// // import "../Cart/Cart.css"
// import { useCart } from "../Context/CartContext";

// export default function OrderDetails2() {
//   const { orderedItems } = useCart(); // Change cartItems to orderedItems

//   // Calculate total amount
//   const totalAmount = orderedItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
//   const orderIds = Math.floor(Math.random() * 1000000) + 1;

//   return (
//     <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="8" xl="6">
//             <MDBCard className="border-top border-bottom border-3 border-color-custom">
//               <MDBCardBody className="p-5">
//                 <p className="lead fw-bold mb-5 heading-text" style={{ color: "#02023a" }}>
//                 Order Summary
//                 </p>
//                  {/* Order ID */}
//                  <div className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}>
//                   <MDBRow>
//                     <MDBCol md="8" lg="9">
//                       <p>Order ID:</p>
//                     </MDBCol>
//                     <MDBCol md="4" lg="3">
//                       <p>{orderIds}</p>
//                     </MDBCol>
//                   </MDBRow>
//                 </div>

//                 {/* Render order details */}
//                 {orderedItems.map((item, index) => (
//                   <div key={index} className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}>
//                     <MDBRow>
//                       <MDBCol md="8" lg="9">
//                         <p>{item.productName}</p>
//                       </MDBCol>
//                       <MDBCol md="2" lg="2">
//                         <p>Qty: {item.quantity}</p>
//                       </MDBCol>
//                       <MDBRow md="2" lg="1">
//                         <p>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
//                       </MDBRow>
//                     </MDBRow>
//                   </div>
//                 ))}

//                 {/* Total amount */}
//                 <div className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}>
//                   <MDBRow>
//                     <MDBCol md="8" lg="9">
//                       <p>Total Amount:</p>
//                     </MDBCol>
//                     <MDBCol md="4" lg="3">
//                       <p>₹{totalAmount.toFixed(2)}</p>
//                     </MDBCol>
//                   </MDBRow>
//                 </div>

//                 {/* Remaining content */}
//                 <p className="mt-4 pt-2 mb-0">
//                   Need help?{" "}
//                   <a href="#!" style={{ color: "#f37a27" }}>
//                     Contact us
//                   </a>
//                 </p>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import "../Productcard/productcard.css";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { useCart } from "../Context/CartContext";
import NavBar from "../NavBar/NavBar";

const OrderDetails = () => {
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
                <p>Qty: {item.quantity}</p>
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

export default OrderDetails;

