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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/cart/add', {
        userId: '65d80bea45cb8407e8765bd3', // Replace with the actual user ID
        items: [{ itemId: productId, quantity: 1 }] // Assuming quantity is always 1 for now
      });

      console.log('Added to cart:', response.data);
      // You can handle success, such as displaying a success message or updating the UI
    } catch (error) {
      console.error('Error adding to cart:', error);
      // You can handle errors, such as displaying an error message to the user
    } finally {
      setLoading(false);
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
