import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import "./Itemcard.css";
// import products from "./Items"
import { useCart } from "../Context/CartContext";

export default function Itemcard({
  image,
  productName,
  rating,
  price,
  productId,
}) {
  const { addToCart } = useCart();

  return (
    <div className="outerCard">
      <Card sx={{ minWidth: 275 }} className="prodCard">
        <CardContent>
          <img src={image} className="prodimage"></img>
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
              onClick={() => addToCart({ productId, productName, price })}
              className="Cart"
            >
              Add to Cart
            </Button>
          </CardActions>
          <CardContent>{price}</CardContent>
        </div>
      </Card>
    </div>
  );
}
