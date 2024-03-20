import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
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
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart({ productId, productName, price });
  };

  const handleGoToCart = () => {
    navigate("/cart"); 
  };

  return (
    <Card sx={{ minWidth: 275 }} className="prodCard">
      <CardContent className="ProdConCard">
        <div className="MobileProdInfo">
          <img src={image} className="prodimage" alt={productName}></img>
          <div className="prodDetails">
            <Typography variant="h6" component="div" className="prodName">{productName}</Typography>
            <Typography variant="body2" color="text.secondary">{price}</Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleAddToCart} className="Cart">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}