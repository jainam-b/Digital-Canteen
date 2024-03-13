import React from 'react'
import "./Subscribe.css"
import Button from '@mui/material/Button';
function Subscribe() {
  return (
    <div>
<div className='Subscribe'>
    <div className='SubscribeBBox'>
<img src="SubscribeBurger.png" className='Subscribeimage'></img>
<div className='subContent'>
    <h3>Subcribe To Our Newsletter</h3>
    <div>Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris 
    sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</div>
    <div className='SubscribeInput'>
    <input placeholder='Type your email here'/>
    <Button variant="contained" className='subscribeButton'>Subscribe</Button>
    </div>
</div>
    </div>

</div>
    </div>
  )
}

export default Subscribe