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
    <div>Subscribe now for mouthwatering updates on our Canteen Management System! Get exclusive menu previews, special offers, and insider tips delivered straight to your inbox. Don't miss out join today</div>
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