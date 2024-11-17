
import { IMG_CDN_URL } from "./constants";

// desctructure {restaurant}
const RestaurantCard = ({ name, cuisines, avgRatingString, cloudinaryImageId })=>{
    //  const {name, cuisines, avgRatingString, cloudinaryImageId } = restaurant.info;
     return (
         <div className='card'>
             <img alt='food-img' src= { IMG_CDN_URL + cloudinaryImageId} />
             <h2>{name}</h2>
             <h3>{cuisines.join(",")}</h3>
             <h4>{avgRatingString}</h4>
         </div>
     )
}

export default RestaurantCard;