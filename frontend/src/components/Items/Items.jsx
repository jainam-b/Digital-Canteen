import React from 'react'
import "./Items.css"
import Itemcard from './Itemcard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Items() {
  return (
    <div>
        <div className='Items'>
            <h6 className='ItemProducts'>Products</h6>
            <h3>Most Popular Items</h3>
            <div className='productMenu'>
              {/* {Data.map((index,value)=>{
             <Itemcard image={value.image} productName={value.productName} rating={value.rating} price={value.price}/>
              })} */}
                <Itemcard image={'./sandwich.png'} productName={"Sandwich"} rating={4.9} price={"70rs"}/>
                <Itemcard image={'./sandwich.png'} productName={"Sandwich"} rating={4.9} price={"70rs"}/>
                <Itemcard image={'./sandwich.png'} productName={"Sandwich"} rating={4.9} price={"70rs"}/>
                <Itemcard image={'./sandwich.png'} productName={"Sandwich"} rating={4.9} price={"70rs"}/>
                <Itemcard image={'./sandwich.png'} productName={"Sandwich"} rating={4.9} price={"70rs"}/>
                <Itemcard image={'./sandwich.png'} productName={"Sandwich"} rating={4.9} price={"70rs"}/>
            </div>
            <div className='moreProduct'>More Products
             <div>
                <ArrowForwardIosIcon className='ArrowForwardIosIcon'/>
            </div>
             </div>
        </div>
    </div>
  )
}

export default Items