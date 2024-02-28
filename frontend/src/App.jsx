import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartItems from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartItems/> 
    </>
  )
}

export default App
