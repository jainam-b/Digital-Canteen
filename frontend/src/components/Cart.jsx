import React, { useState, useEffect } from "react";
import { useCart } from "./Context/CartContext";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios"; // Import axios for making HTTP requests
import Payment from "./Payments";
import NavBar from "./NavBar/NavBar";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } =
    useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    // Initialize itemQuantities when cartItems change
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.productName] = item.quantity || 1; // Set default quantity to 1 if not provided
    });
    setItemQuantities(initialQuantities);
  }, [cartItems]);

  useEffect(() => {
    // Calculate total price when cart items or item quantities change
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += parseFloat(item.price) * itemQuantities[item.productName];
    });
    setTotalPrice(totalPrice.toFixed(2));
  }, [cartItems, itemQuantities]);

  const handleClearCart = () => {
    clearCart();
    // Navigate back to the menu item page after clearing the cart
  };

  const handleQuantityChange = (itemName, newQuantity) => {
    // Ensure the new quantity is at least 1
    newQuantity = Math.max(newQuantity, 1);
    // Update itemQuantities state
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: newQuantity,
    }));
    // Update cart item quantity
    updateCartItemQuantity(itemName, newQuantity);
  };

  const handlePay = async () => {
    try {
      // Ensure each item in cartItems has a quantity property
      const items = cartItems.map(cartItem => ({
        ...cartItem,
        quantity: cartItem.quantity || 1 // Set default quantity to 1 if not provided
      }));
  
      // Send a POST request to the backend to place the order
      const response = await axios.post("http://localhost:3000/api/place-order", {
        userId: "65f03594f4ab492f8884d9c6", // Replace with the actual user ID
        cartItems: items, // Include the cartItems array in the request body
        totalPrice: totalPrice // Include the totalPrice
      });
  
      // Handle success response
      console.log("Order placed:", response.data);
  
      // Clear the cart after successful order placement
      clearCart();
     
    } catch (error) {
      // Handle error response
      console.error("Error placing order:", error);
    }
  };
  
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

  try {
    const result = await axios.post("http://localhost:3000/pay/orders");
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_YMSg1NivuORLa3",
      amount: "1200",
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      order_id: order_id,
      prefill: {
        name: "Canteen ",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
      handler: async function (response) {
        // You can directly call handlePay here
        handlePay();
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Error processing payment:", error);
    // Handle the error appropriately, e.g., show an error message to the user
  }
}


  
  
  

  return (
    <><NavBar></NavBar><Container maxWidth="md" className="order-payment-container">
      <Typography variant="h4" align="center" gutterBottom>

      </Typography>
      <Grid container spacing={2}>
        {/* Section 1: Cart Items */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Cart Items
          </Typography>
          {cartItems.map((item, index) => (
            <Card
              key={index}
              sx={{ display: "flex", marginBottom: 2 }}
            >
              <CardMedia
                component="img"
                sx={{ width: 150, objectFit: "cover" }}
                image={"./sandwich.png"}
                alt={item.productName} />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h6">{item.productName}</Typography>
                <Typography variant="body1">Price: ₹{item.price}</Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "flex-end", alignItems: "center" }}
              >
                <IconButton
                  onClick={() => handleQuantityChange(
                    item.productName,
                    itemQuantities[item.productName] - 1
                  )}
                  size="small"
                >
                  <Remove />
                </IconButton>
                <Typography variant="body1">
                  {itemQuantities[item.productName]}
                </Typography>
                <IconButton
                  onClick={() => handleQuantityChange(
                    item.productName,
                    itemQuantities[item.productName] + 1
                  )}
                  size="small"
                >
                  <Add />
                </IconButton>
                <IconButton
                  onClick={() => removeFromCart(item.productName)}
                  size="small"
                >
                  Remove
                </IconButton>
              </CardActions>
            </Card>
          ))}
          {/* <Button
      variant="contained"
      onClick={handleClearCart}
      className="Cart"
      style={{ marginTop: "1rem" }}
    >
      Clear Cart
    </Button> */}
        </Grid>
        {/* Section 2: Total Price */}
        <Grid container spacing={2}>
          {/* Total Price Text */}
          <Grid item xs={6}>
            <Typography variant="h6" style={{ marginLeft: "16px" }} gutterBottom>
              Total Price
            </Typography>
          </Grid>

          {/* Price Value */}
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography variant="body1">₹{totalPrice}</Typography>
          </Grid>

          {/* Pay Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              className="Cart"
              style={{ marginTop: "1rem", marginLeft: "18px", width: "-webkit-fill-available" }}
              onClick={displayRazorpay} // Call handlePay function when the "Pay" button is clicked
            >
              Proceed To  Pay
            </Button>
          </Grid>
        </Grid>

      </Grid>
    </Container></>
  );
};

export default CartPage;
