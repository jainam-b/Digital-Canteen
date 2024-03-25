import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Itemcard.css";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import "../Productcard/productcard.css"; 
import { useEffect } from "react";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";
export default function Itemcard({
  image,
  productName,
  rating,
  price,
  productId,
}) {
  const navigate = useNavigate();
  const { addToCart, updateCartItemQuantity, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [addedToCart, setAddedToCart] = useState(false); // State to track if item added to cart

  const handleAddToCart = () => {
    addToCart({ productId, productName, price, quantity });
    setAddedToCart(true); // Set addedToCart to true
    showToastMessage();
     
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increase quantity by 1
    updateCartItemQuantity(productName, quantity + 1); // Update quantity in cart context
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Decrease quantity by 1
      updateCartItemQuantity(productName, quantity - 1); // Update quantity in cart context
    }
    
  };
  const [isMobile, setIsMobile] = useState(false);

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
  const showToastMessage = () => {
    toast.success("Item Added to cart!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    
  };

  return (

    <div>
      <div>
      {isMobile ? <p><MobileCard
      
      ></MobileCard></p> : <p><DesktopCard></DesktopCard></p>}
    </div>
    </div>
  );
}














// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import StarIcon from "@mui/icons-material/Star";
// import IconButton from "@mui/material/IconButton";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import "./Itemcard.css";
// import { useCart } from "../Context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
// import "../Productcard/productcard.css"; 
// export default function Itemcard({
//   image,
//   productName,
//   rating,
//   price,
//   productId,
// }) {
//   const navigate = useNavigate();
//   const { addToCart, updateCartItemQuantity, cartItems } = useCart();
//   const [quantity, setQuantity] = useState(1); // State for quantity
//   const [addedToCart, setAddedToCart] = useState(false); // State to track if item added to cart

//   const handleAddToCart = () => {
//     addToCart({ productId, productName, price, quantity });
//     setAddedToCart(true); // Set addedToCart to true
//     showToastMessage();
     
//   };

//   const handleGoToCart = () => {
//     navigate("/cart");
//   };

//   const handleIncreaseQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1); // Increase quantity by 1
//     updateCartItemQuantity(productName, quantity + 1); // Update quantity in cart context
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1); // Decrease quantity by 1
//       updateCartItemQuantity(productName, quantity - 1); // Update quantity in cart context
//     }
    
//   };
//   const showToastMessage = () => {
//     toast.success("Item Added to cart!", {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       // transition: Bounce,
//     });
    
//   };

//   return (
//     <><ToastContainer closeOnClick />
//     <div className=" ">
//       {/* <button onClick={showToastMessage}>Notify</button> */}


//       <div sx={{ minWidth: 275 }} className="card ">
//         <div className="">
//           <div className="res-img">
//             <img src={  "./sandwich.png"}className="prodimage" alt={productName} style={{borderRadius:"18px"}} />
//             <div>
//               <p className="resName">{productName}</p>
//               <span>
//                 <StarIcon /> {rating}
//               </span>
//               <Typography>{price}</Typography>
//             </div>
//           </div>
//         </div>
//         <div className="CartItem">
//           <CardActions>
//             {addedToCart ? (
//               <Box display="flex" alignItems="center">
//                 <IconButton onClick={handleDecreaseQuantity} size="small">
//                   <RemoveIcon />
//                 </IconButton>
//                 <Typography>{quantity}</Typography>
//                 <IconButton onClick={handleIncreaseQuantity} size="small">
//                   <AddIcon />
//                 </IconButton>
//               </Box>
//             ) : (
//               <Button
//                 variant="contained"
//                 onClick={handleAddToCart}

//                 className="Cart"
//               >
//                 Add to Cart
//               </Button>
//             )}
//           </CardActions>
//         </div>
//       </div>
//     </div></>
//   );
// }


