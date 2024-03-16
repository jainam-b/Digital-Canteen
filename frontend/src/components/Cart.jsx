import React, { useState, useEffect } from "react";
import { useCart } from "./Context/CartContext";
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, IconButton } from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.productName] = 1; // Set default quantity to 1 for each item
    });
    setItemQuantities(initialQuantities);
  }, [cartItems]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cartItems.forEach(item => {
      totalPrice += parseFloat(item.price) * itemQuantities[item.productName]; // Multiply by quantity
    });

    setTotalPrice(totalPrice.toFixed(2));
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems, itemQuantities]);

  const handleClearCart = () => {
    clearCart();
    // Navigate back to the menu item page after clearing the cart
  };

  const handleQuantityChange = (itemName, newQuantity) => {
    setItemQuantities({ ...itemQuantities, [itemName]: newQuantity });
    updateCartItemQuantity(itemName, newQuantity);
    calculateTotalPrice();
  };

  return (
    <Container maxWidth="md" className="order-payment-container">
      <Typography variant="h4" align="center" gutterBottom>
        Order Payment
      </Typography>
      <Grid container spacing={2}>
        {/* Section 1: Cart Items */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Cart Items
          </Typography>
          {cartItems.map((item, index) => (
            <Card key={index} sx={{ display: "flex", marginBottom: 2 }}>
              <CardMedia component="img" sx={{ width: 150, objectFit: "cover" }} image={"./sandwich.png"} alt={item.productName} />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h6">{item.productName}</Typography>
                <Typography variant="body1">Price: ₹{item.price}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end", alignItems: "center" }}>
                <IconButton onClick={() => handleQuantityChange(item.productName, Math.max(itemQuantities[item.productName] - 1, 1))} size="small">
                  <Remove />
                </IconButton>
                <Typography variant="body1">{itemQuantities[item.productName]}</Typography>
                <IconButton onClick={() => handleQuantityChange(item.productName, itemQuantities[item.productName] + 1)} size="small">
                  <Add />
                </IconButton>
                <IconButton onClick={() => removeFromCart(item.id)} size="small">
                  Remove
                </IconButton>
              </CardActions>
            </Card>
          ))}
          <Button variant="contained" onClick={handleClearCart} className="Cart" style={{ marginTop: '1rem' }}>
            Clear Cart
          </Button>
        </Grid>
        {/* Section 2: Total Price */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Total Price
          </Typography>
          <Typography variant="body1">₹{totalPrice}</Typography>
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />}   className="Cart" style={{ marginTop: '1rem' }}>
            Pay
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
