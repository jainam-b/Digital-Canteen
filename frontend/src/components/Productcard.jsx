import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart }) => {
  const handleAddToCart = () => {
    addToCart(product._id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div className="action-buttons">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
