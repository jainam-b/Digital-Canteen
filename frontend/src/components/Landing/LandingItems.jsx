import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Itemcard from '../Items/Itemcard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for the loader
import { useNavigate } from "react-router-dom"; 
import NavBar from '../NavBar/NavBar';

function Items() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State variable to track loading status
  const [showAlert, setShowAlert] = useState(false); // State variable to control alert visibility
  const navigate = useNavigate(); 

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

  return (
    <>
     
      <div>
       

        <div className='Items' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <h3>Most Popular Items</h3>
          {loading ? ( // Display loader if loading is true
            <div className="loader">
              <CircularProgress />
            </div>
          ) : (
            <div className='productMenu'>
              {products.map((product, index) => (
                <Itemcard
                  key={index}
                  productId={product._id}
                  image="sandwich.png" // Replace with the actual image URL
                  productName={product.name}
                  rating={product.rating} // Assuming rating is a property of the product object
                  price={`${product.price}`} // Assuming price is a property of the product object
                  style={{ width: '30%', marginBottom: '20px' }} // Adjust the width and margin as needed
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Items;
