import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Items.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useCart } from "../Context/CartContext";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";
import Itemcard from "./DesktopCard";

function Items() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // State to track if device is mobile
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Consider devices with width less than 768 pixels as mobile
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/order/menus");
        // console.log(response.data,"itemjsx")
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="itemMenu">
      <NavBar />
      <div className="Items">
        <h3>Most Popular Items</h3>
        {loading ? (
          <div className="loader">
            <CircularProgress />
          </div>
        ) : (
          <div className="productMenu">
            {products.length > 0 ? (
              products.map((product, index) => (
                isMobile ? (
                  <MobileCard
                    key={index}
                    productId={product._id}
                    image={product.image}
                    productName={product.name}
                    rating={product.rating}
                    price={`${product.price}`}
                  />
                ) : (
        
                  <DesktopCard
                    key={index}
                    productId={product._id}
                    image={product.image}
                    productName={product.name}
                    rating={product.rating}
                    price={`${product.price}`}
                  />
                )
              ))
            )

            // (
            //   <Itemcard
            //   key={index}
            //         productId={product._id}
            //         image={product.image}
            //         productName={product.name}
            //         rating={product.rating}
            //         price={`${product.price}`}
            //   />
            // )
            //   )))
             : (
              <div className="loader">
                <CircularProgress />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
