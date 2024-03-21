import React from 'react';
import Box from '@mui/material/Box';
import "./FirstScreen.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FSCard from './FSCard';

function FirstScreen() {
  return (
    <div className="container">
      
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{ width: { xs: '100%', sm: '50%' } }} className="sectionOne">
          <h1 className='HedingVal'><div>The Fastest <br /> Delivery<br /> In <span className='HeadDiffColor'>Your City</span> </div></h1>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente 
            atque numquam. Architecto accusantium dolore sit, ratione facere quasi cumque
            cum. Ex beatae facere magnam nulla maiores tempore ratione necessitatibus, 
          </div>
          <div className='OrderNow'>
            <Button variant="contained" className='OrderButton'>Order Now</Button>
          </div>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '50%' } }} className="sectionTwo">
          <div className='foodBox'>
            <FSCard cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
            <FSCard cardImage={'junkfood.png'} ImageHead={'Food Combo'} Desp={'Mushroom Sauce '} Price={'$9.15'} />
          </div>
          <div className='foodBox'>
            <FSCard cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
            <FSCard cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
          </div>
        </Box>
      </Stack>
    </div>
  );
}

export default FirstScreen;
