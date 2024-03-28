import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FSCard from './FSCard';
import './FirstScreen.css';

function FirstScreen() {
  return (
    <div className="container">
      <div className="background-image">
        <Box className="sectionOne">
          <h1 className='HeadingVal'>
            <div className='text1'>Order <br /> Food <span className='HeadDiffColor'>with Ease</span> </div>
          </h1>
          <div className='text2'>
            Experience the convenience of ordering delicious food online.
          </div>
          <div className='OrderNow'>
            <Button variant="contained" className='OrderButton' onClick={()=>{window.location.href="/item"}}>Order Now</Button>
          </div>
        </Box>
      </div>
      {/* <Box className="sectionTwo" onClick={()=>{window.location.href="/item"}}>
        <div className='foodBox'>
          <FSCard className='img1' cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
          <FSCard className='img2' cardImage={'junkfood.png'} ImageHead={'Food Combo'} Desp={'Mushroom Sauce '} Price={'$9.15'} />
        </div>
        <div className='foodBox'>
          <FSCard cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
          <FSCard cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
        </div>
      </Box> */}
    </div>
  );
}

export default FirstScreen;
