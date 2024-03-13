import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './Productcard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (productId) => {
    // Add the product to the cart
    setCart([...cart, productId]);
    console.log(cart);
  };

  const removeFromCart = (productId) => {
    // Remove the product from the cart
    const updatedCart = cart.filter((item) => item !== productId);
    setCart(updatedCart);
    console.log(cart);
  };

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default Products;
