import React from 'react';
import Box from '@mui/material/Box';
import './Address.css';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';

function Address() {
  return (
    <div className='Address'>
      <Box component="section" className='AddressBox'>
        <div className='AddSec'>
          <AccessTimeRoundedIcon className='AddSecIcon' />
          <h5>Today 10:00am - 10:00pm</h5>
          <p>Working time</p>
        </div>
        <hr className='hrline'></hr>
        <div className='AddSec'>
          <LocationOnRoundedIcon className='AddSecIcon' />
          <h5>Washington, D.C., DC, USA</h5>
          <p>Our Location</p>
        </div>
        <hr className='hrline'></hr>
        <div className='AddSec'>
          <PhoneCallbackRoundedIcon className='AddSecIcon' />
          <h5>+0123 456 7891</h5>
          <p>Phone Number</p>
        </div>
      </Box>
    </div>
  )
}

export default Address;
