import React from 'react'
import Box from '@mui/material/Box';
import './Address.css'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
function Address() {
  return (
    <div>
      <div className='Address'>
        <Box component="section" className='AddressBox'>
          <span className='AddSec'>
            <AccessTimeRoundedIcon className='AddSecIcon' />
            <h5>Today 10:00am - 10:00pm</h5>
            <p>Working time</p>
          </span>
          <hr className='hrline'></hr>
          <span className='AddSec'>
            <LocationOnRoundedIcon className='AddSecIcon' />
            <h5>Washington, D.C., DC,USA</h5>
            <p>Our Location</p>
          </span>
          <hr className='hrline'></hr>
          <span className='AddSec'>
            <PhoneCallbackRoundedIcon className='AddSecIcon' />
            <h5>+0123 456 7891</h5>
            <p>Phone Number</p>
          </span>
        </Box>
      </div>
    </div>
  )
}

export default Address