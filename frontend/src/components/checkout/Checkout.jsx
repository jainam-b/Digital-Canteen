import { useEffect, useState } from "react";
import "../Productcard/productcard.css";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { useCart } from "../Context/CartContext";
import NavBar from "../NavBar/NavBar";
import DesktopCard from "../Items/DesktopCard";
import MobileCard from "../Items/MobileCard";

const Checkout = () => {
  const { orderedItems } = useCart(); // Change cartItems to orderedItems
  const orderIds = Math.floor(Math.random() * 1000000) + 1;

  // Calculate total amount
  const totalAmount = orderedItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

  return (
    <>
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
            ) : (
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
};

export default Checkout;
