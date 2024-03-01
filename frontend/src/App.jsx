import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartItems from './components/Cart'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CartItems/>  */}
      <Profile/> 
    </>
  )
}

export default App
