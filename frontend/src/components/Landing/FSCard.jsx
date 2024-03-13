import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./FSCard.css"

function FSCard({cardImage, ImageHead,Desp,Price}) {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <div>
<Card sx={{ minWidth: 200 }} className='FScard'>
      <CardContent>
        <img src={cardImage} className='FSImage'></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {ImageHead}
        </Typography>
        <Typography component="div">
         {Desp}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {Price}
        </Typography>
       
      </CardContent>
     
    </Card>
    </div>
  )
}

export default FSCard