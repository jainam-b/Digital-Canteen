import React from 'react'
import "../Items/Items.css"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FoodCard from './FoodCard';
import "./FoodCard.css"
import "./FoodItem.css"
function FoodItem() {
    return (
        <div>
            <div className='Items'>
                <h6 className='ItemProducts'>Service</h6>
                <h3> Why Choose our Favorite Food</h3>
               
               <div className='Foodcards'>
                <FoodCard FoodContent={" But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."} Foodcardheading={"Qualityfull Food"} icon={<RestaurantIcon/>}/>
                <FoodCard FoodContent={" But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."} Foodcardheading={"Qualityfull Food"} icon={<RestaurantIcon/>}/>
                <FoodCard FoodContent={" But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."} Foodcardheading={"Qualityfull Food"} icon={<RestaurantIcon/>}/>
             </div>
            </div>
        </div>
      )
}

export default FoodItem