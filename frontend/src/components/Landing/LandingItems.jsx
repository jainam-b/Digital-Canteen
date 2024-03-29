import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Itemcard from '../Items/Itemcard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for the loader
import { useNavigate } from "react-router-dom"; 
import NavBar from '../NavBar/NavBar';
import DesktopCard from '../Items/DesktopCard';
import MobileCard from '../Items/MobileCard';


function Items() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State variable to track loading status
  const [showAlert, setShowAlert] = useState(false); // State variable to control alert visibility
  const navigate = useNavigate(); 
  const [isMobile, setIsMobile] = useState(false); // State to track if device is mobile

  const routeChange = () => { 
    let path = `/menu-items`; 
    navigate(path);
  }

  const handlenavigateCart=()=>{
    let path = `/cart`; 
    navigate(path);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/order/menus');
        setProducts(response.data.slice(0, 8)); // Only keep the first 6 items
        setLoading(false); 
        setShowAlert(true); 
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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
  
  return (
    <>
      
      <div className="itemMenu">
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
                      category={product.category}
                      description={product.description}
                    />
                  ) : (
                    <DesktopCard
                      key={index}
                      productId={product._id}
                      image={product.image}
                      productName={product.name}
                      rating={product.rating}
                      price={`${product.price}`}
                      category={product.category}
                      description={product.description}
                    />
                  )
                ))
              )

               : (
                <div className="loader">
                  <CircularProgress />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Items;
