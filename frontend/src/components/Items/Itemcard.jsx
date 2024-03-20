import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Itemcard.css";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

export default function Itemcard({
  image,
  productName,
  rating,
  price,
  productId,
}) {
  const navigate = useNavigate();
  const { addToCart, updateCartItemQuantity , cartItems} = useCart();
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [addedToCart, setAddedToCart] = useState(false); // State to track if item added to cart
console.log(cartItems);
  const handleAddToCart = () => {
    addToCart({ productId, productName, price, quantity });
    setAddedToCart(true); // Set addedToCart to true
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increase quantity by 1
    updateCartItemQuantity(productName, quantity + 1); // Update quantity in cart context
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Decrease quantity by 1
      updateCartItemQuantity(productName, quantity - 1); // Update quantity in cart context
    }
  };

  return (
    <div className="outerCard">
      <Card sx={{ minWidth: 275 }} className="prodCard">
        <CardContent>
          <img src={image} className="prodimage" alt={productName}></img>
          <div className="prodIntro">
            <h5>{productName}</h5>
            <span>
              <StarIcon /> {rating}
            </span>
          </div>
        </CardContent>
        <div className="CartItem">
          <CardActions>
            {addedToCart ? (
              <Box display="flex" alignItems="center">
                <IconButton onClick={handleDecreaseQuantity} size="small">
                  <RemoveIcon />
                </IconButton>
                <Typography>{quantity}</Typography>
                <IconButton onClick={handleIncreaseQuantity} size="small">
                  <AddIcon />
                </IconButton>
              </Box>
            ) : (
              <Button
                variant="contained"
                onClick={handleAddToCart}
                className="Cart"
              >
                Add to Cart
              </Button>
            )}
          </CardActions>
          <CardContent>{price}</CardContent>
        </div>
      </Card>
    </div>
  );
}