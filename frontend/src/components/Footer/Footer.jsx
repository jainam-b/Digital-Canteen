import React from 'react'
import "./Footer.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Footer() {
  return (
    <div>
        <div className='Footer'>
       <div className='footerSection1'>
      <img></img>
      <div
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Temporibus eveniet repellendus a doloremque officia vitae
          quam aliquid voluptatibus excepturi! Voluptatum.
       </div>
          <div>
          <FacebookRoundedIcon/>
          </div>
       </div>
       <div className='footerSection2'>
        <h4>Opening Restaurant</h4>
        <span>Sat-Wed: 09:00am-10:00PM</span><br></br>
        <span>Thursday: 09:00am-11:00PM</span><br></br>
        <span>Friday: 09:00am-8:00PM</span>
       </div>
       <div className='footerSection3'>
        <h4>User Link</h4>
        <span>About Us</span><br></br>
        <span>Contact Us</span><br></br>
        <span>Order Delivery</span><br></br>
        <span>Payment & Tex</span><br></br>
        <span>Terms of Services</span>
       </div>
       <div className='footerSection4'>
        <h4>Contract Us</h4>
        <span>1234 Country Club Ave</span><br></br>
        <span>NC 123456, London, UK</span>
        <div className='email'>
        <Button variant="contained" className='subscribeButton'>
            <KeyboardArrowRightIcon/>
        </Button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer