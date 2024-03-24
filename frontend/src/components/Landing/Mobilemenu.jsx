import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FSCard from './FSCard';
import './mobilemenu.css';

function Mobilemenu() {
  return (
    <div className="">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{ width: { xs: '100%', sm: '50%' } }} className="sectionOne">
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
        {/* Conditionally render sectionTwo */}
        {window.innerWidth > 756 && (
          <Box sx={{ width: { xs: '100%', sm: '50%' } }} className="sectionTwo" onClick={()=>{window.location.href="/item"}}>
            <div className='foodBox'>
              <FSCard className='img1' cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
              <FSCard className='img2' cardImage={'junkfood.png'} ImageHead={'Food Combo'} Desp={'Mushroom Sauce '} Price={'$9.15'} />
            </div>
            <div className='foodBox'>
              <FSCard cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
              <FSCard cardImage={'SubscribeBurger.png'} ImageHead={'Burger'} Desp={'Mushroom Sauce '} Price={'$5.15'} />
            </div>
          </Box>
        )}
      </Stack>
    </div>
  );
}

export default Mobilemenu;
