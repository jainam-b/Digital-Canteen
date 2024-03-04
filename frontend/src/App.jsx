import { useState } from 'react'
import './App.css'
import CartItems from './components/Cart'
import Profile from './components/Profile'
import Payment from './components/Payments'
import { BrowserRouter , Routes, Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
         
         <Routes>
           <Route path="/payment" element={<Payment />}></Route>
           {/* <Route path="/cart" element={<CartItems />}></Route>
           <Route path="/chart" element={<Charts />}></Route> */}
            
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
