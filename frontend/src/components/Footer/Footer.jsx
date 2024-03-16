import React from 'react';
import "./Footer.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Footer() {
  return (
    <div className='Footer'>
      <div className='footerSection footerSection1'>
        <img src="your-logo.png" alt="logo" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet repellendus a doloremque officia vitae quam aliquid voluptatibus excepturi! Voluptatum.
        </div>
        <div>
          <FacebookRoundedIcon />
        </div>
      </div>
      <div className='footerSection footerSection2'>
        <h4>Opening Restaurant</h4>
        <span>Sat-Wed: 09:00am-10:00PM</span><br />
        <span>Thursday: 09:00am-11:00PM</span><br />
        <span>Friday: 09:00am-8:00PM</span>
      </div>
      <div className='footerSection footerSection3'>
        <h4>User Link</h4>
        <span>About Us</span><br />
        <span>Contact Us</span><br />
        <span>Order Delivery</span><br />
        <span>Payment & Tex</span><br />
        <span>Terms of Services</span>
      </div>
      <div className='footerSection footerSection4'>
        <h4>Contact Us</h4>
        <span>1234 Country Club Ave</span><br />
        <span>NC 123456, London, UK</span>
        <div className='email'>
          <Button variant="contained" className='subscribeButton'>
            <KeyboardArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
