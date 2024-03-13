import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Items.css';
import Itemcard from './Itemcard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Items() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/order/menus');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className='Items'>
        <h6 className='ItemProducts'>Products</h6>
        <h3>Most Popular Items</h3>
        <div className='productMenu'>
          {products.length > 0 ? (
            products.map((product, index) => (
              <Itemcard
                key={index}
                image="sandwich.png" // Replace with the actual image URL
                productName={product.name}
                rating={product.rating} // Assuming rating is a property of the product object
                price={`${product.price}rs`} // Assuming price is a property of the product object
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
        <div className='moreProduct'>
          More Products
          <div>
            <ArrowForwardIosIcon className='ArrowForwardIosIcon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
