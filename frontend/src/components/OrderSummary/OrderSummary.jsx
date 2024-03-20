import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import { useCart } from "../Context/CartContext";

export default function OrderDetails2() {
  const { orderedItems } = useCart(); // Change cartItems to orderedItems

  // Calculate total amount
  const totalAmount = orderedItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  const orderIds = Math.floor(Math.random() * 1000000) + 1;

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="8" xl="6">
            <MDBCard className="border-top border-bottom border-3 border-color-custom">
              <MDBCardBody className="p-5">
                <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                  Purchase Receipt
                </p>
                 {/* Order ID */}
                 <div className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}>
                  <MDBRow>
                    <MDBCol md="8" lg="9">
                      <p>Order ID:</p>
                    </MDBCol>
                    <MDBCol md="4" lg="3">
                      <p>{orderIds}</p>
                    </MDBCol>
                  </MDBRow>
                </div>

                {/* Render order details */}
                {orderedItems.map((item, index) => (
                  <div key={index} className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}>
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>{item.productName}</p>
                      </MDBCol>
                      <MDBCol md="2" lg="2">
                        <p>Qty: {item.quantity}</p>
                      </MDBCol>
                      <MDBRow md="2" lg="1">
                        <p>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                      </MDBRow>
                    </MDBRow>
                  </div>
                ))}

                {/* Total amount */}
                <div className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}>
                  <MDBRow>
                    <MDBCol md="8" lg="9">
                      <p>Total Amount:</p>
                    </MDBCol>
                    <MDBCol md="4" lg="3">
                      <p>₹{totalAmount.toFixed(2)}</p>
                    </MDBCol>
                  </MDBRow>
                </div>

                {/* Remaining content */}
                <p className="mt-4 pt-2 mb-0">
                  Need help?{" "}
                  <a href="#!" style={{ color: "#f37a27" }}>
                    Contact us
                  </a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
