// CartPage.js
import React,{useState, useEffect} from "react";
import { useCart } from "./Context/CartContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Itemcard from "./Items/Itemcard";
import axios from "axios";
import { useUser } from "./Context/UserContext ";
import { spacing } from '@mui/system';
 

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  console.log("cartitems",cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
    navigate('/item'); // Navigate back to the menu item page after clearing the cart
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0; // Initialize totalPrice variable

    cartItems.forEach((item) => {
      totalPrice += parseFloat(item.price); // Convert price to number if it's a string
    });

    setTotalPrice(totalPrice.toFixed(2)); // Round the total price to 2 decimal places
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);
 
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await axios.post("http://localhost:3000/pay/orders", {
        amount: 1000, // Update the amount with the new amount
    });

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_YMSg1NivuORLa3", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Soumya Corp.",
        description: "Test Transaction",
         
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:5000/payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
  return (
    <div>
      <Button variant="contained" className="Cart" style={{ marginLeft: '90%',marginTop: '1%' }} onClick={handleClearCart}>
  Clear Cart
</Button>

      <div>
        <div className="Items">
          <h3>Cart Items</h3>
          <div className="productMenu  " style={{ justifyContent: 'center' }} >
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

          <div>Total Price: {totalPrice}</div>
        </div>
      </div>
      <Button variant="contained" onClick={displayRazorpay} className="Cart">
        Pay
      </Button>
    </div>
  );
};

export default CartPage;
