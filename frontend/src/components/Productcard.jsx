import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product._id); // Pass the product ID to the addToCart function
  };

  return (
    <div className="product-card">
      {/* <img src={product.image} alt={product.name} /> */}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button> {/* Call handleAddToCart on button click */}
    </div>
  );
};

const Products = () => {
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

  const addToCart = async (productId) => {
    try {
      // Send a POST request to the addToCart endpoint with the product ID
      const response = await axios.post('http://localhost:3000/cart/add', { productId });
      console.log('Product added to cart:', response.data);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
