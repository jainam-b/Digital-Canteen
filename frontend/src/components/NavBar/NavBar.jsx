import React from 'react'
import './NavBar.css'




const NavBar = () => {
  return (
    <div className='navbar'>
        <img src="foodlogo.png" alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Shope</li>
        </ul>


      <div className='search-box'>
      <img src="searchicon.png" alt="" />
        <input type="text" placeholder='Search' />
     
        <img src="carticon.png" alt=""  className='carti'/>
        </div>  

        
    </div>

    
  )
}

export default NavBar
