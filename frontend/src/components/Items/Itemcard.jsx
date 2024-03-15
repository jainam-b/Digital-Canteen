import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import "./Itemcard.css";
import { useCart } from "../Context/CartContext"; // Import useCart from CartContext
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Itemcard({
  image,
  productName,
  rating,
  price,
  productId,
}) {
  const navigate = useNavigate(); // Get navigate function
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  const handleAddToCart = () => {
    // Call addToCart function to add the item to the cart
    addToCart({ productId, productName, price });
  };

  const handleGoToCart = () => {
    navigate("/cart"); // Navigate to the cart page
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
            <Button
              variant="contained"
              onClick={handleAddToCart}
              className="Cart"
            >
              Add to Cart
            </Button>
            <Button variant="contained" onClick={handleGoToCart} className="Cart">
              Go to Cart
            </Button>
          </CardActions>
          <CardContent>{price}</CardContent>
        </div>
      </Card>
    </div>
  );
}
