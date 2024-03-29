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
                <FoodCard FoodContent={"  A canteen management system designed specifically for dine-in and takeaway can be customized to meet the unique needs of the establishment. Additionally, it should be scalable to accommodate future growth and changes in demand.."} Foodcardheading={"Customization and Scalability:"} icon={<RestaurantIcon/>}/>
                <FoodCard FoodContent={"  With a system designed for dine-in and takeaway, orders can be processed quickly and accurately. Separate workflows can be established for dine-in customers and those opting for takeaway, ensuring smooth operations during peak hours."} Foodcardheading={"Efficient Order Management:"} icon={<RestaurantIcon/>}/>
                <FoodCard FoodContent={" Your favorite food likely tastes delicious to you. It could be because of its unique flavor profile, combination of ingredients, or how it's prepared. Our taste buds play a significant role in shaping our food preferences."} Foodcardheading={"Taste Preferences: "} icon={<RestaurantIcon/>}/>
             </div>
            </div>
        </div>
      )
}

export default FoodItem