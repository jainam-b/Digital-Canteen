// OrderPaymentPage.js
import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Card, CardContent, CardMedia, CardActions, IconButton } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import './Checkout.css';
import NavBar from '../NavBar/NavBar';

function Checkout() {
  const [itemQuantities, setItemQuantities] = useState({
    Pizza: 1,
    Burger: 2,
    Salad: 1
  });

  const handleQuantityChange = (itemName, value) => {
    setItemQuantities({ ...itemQuantities, [itemName]: value });
  };

  const [formData] = useState({
    name: 'John Doe',
    phone: '1234567890',
    email: 'john@example.com',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    // Handle payment method selection change if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const items = [
    { name: 'Pizza', price: 10, image: 'https://via.placeholder.com/150' },
    { name: 'Burger', price: 5, image: 'https://via.placeholder.com/150' },
    { name: 'Salad', price: 8, image: 'https://via.placeholder.com/150' }
  ];

  // Calculate total price
  const totalPrice = Object.keys(itemQuantities).reduce((total, itemName) => {
    return total + (itemQuantities[itemName] * items.find(item => item.name === itemName).price);
  }, 0);

  return (
    <>
    <NavBar/>
   
    <Container maxWidth="md" className="order-payment-container">
      <Typography variant="h4" align="center" gutterBottom>
        Order Payment
      </Typography>
      <Grid container spacing={2}>
        {/* Section 1: Item Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Item Details
          </Typography>
          {items.map((item, index) => (
            itemQuantities[item.name] > 0 && (
              <Card key={index} sx={{ display: 'flex', marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, objectFit: 'cover' }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">Price: ${item.price}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                  <IconButton
                    onClick={() => handleQuantityChange(item.name, Math.max(itemQuantities[item.name] - 1, 0))}
                    size="small"
                  >
                    <Remove />
                  </IconButton>
                  <Typography variant="body1">{itemQuantities[item.name]}</Typography>
                  <IconButton
                    onClick={() => handleQuantityChange(item.name, itemQuantities[item.name] + 1)}
                    size="small"
                  >
                    <Add />
                  </IconButton>
                </CardActions>
              </Card>
            )
          ))}
        </Grid>
        {/* Section 2: Customer Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Customer Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              required
            />
          
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              value={formData.phone}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              required
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="payment-method-label">Payment Method</InputLabel>
              <Select
                labelId="payment-method-label"
                id="payment-method"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                label="Payment Method"
                required
              >
                <MenuItem value="credit_card">Credit Card</MenuItem>
                <MenuItem value="debit_card">Debit Card</MenuItem>
                <MenuItem value="net_banking">Net Banking</MenuItem>
                <MenuItem value="wallet">Wallet</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" gutterBottom>
              Total Amount: ${totalPrice.toFixed(2)}
            </Typography>
            <Button variant="contained" color="primary" type="submit" fullWidth  className="confirmOrder">
              Confirm Order
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default Checkout;
