import { useState } from 'react'
import CartItems from './components/Cart'
import ItemCard from './components/ItemCard'
import Payment from './components/Payments'
import { BrowserRouter , Routes, Router, Route } from "react-router-dom";
import Products from './components/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
     <BrowserRouter>
         
         <Routes>
           <Route path="/payment" element={<Payment />}></Route>
           <Route path="/item" element={<ItemCard />}></Route>
           <Route path="/cart" element={<CartItems />}></Route>
           <Route path="/product" element={<Products />}></Route>
           {/* <Route path="/chart" element={<Charts />}></Route> */}
            
         </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
