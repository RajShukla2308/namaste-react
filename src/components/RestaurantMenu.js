import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './constants';
import { Shimmer } from './Shimmer';

const RestaurantMenu = () =>{
    const params = useParams();
    // console.log(params);

    const [restaurant,setRestaurant] = useState({});

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(
        'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=' + params.id + '&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        setRestaurant(json.data);
        console.log(restaurant);
    }

     return restaurant?.cards?.length > 0 ?  (
        <>
            <div className='restaurant-details'>
                {/* <h1>Restaurant Id: {params.id}</h1> */}
                <h2> {restaurant?.cards[0]?.card?.card?.text}, </h2>
                {/* <img src={IMG_CDN_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId} /> */}
                <h2> {restaurant?.cards[2]?.card?.card?.info?.areaName}, </h2>
                <h2> {restaurant?.cards[2]?.card?.card?.info?.city}, </h2>
                <h2> Rating : {restaurant?.cards[2]?.card?.card?.info?.avgRating}</h2>
            </div>

            <div className='menu'>
                <h1>Menu</h1>
                <div className='dish-container'>
                {
                    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards.map((item,index)=>{
                        console.log(item.card.info)
                        return <>
                            <div className='dish'>
                            <h2 key={item.card.info.id}>{item?.card?.info?.name}</h2>
                            <h3 key={item.card.info.id}>Price: {item?.card?.info?.price / 100}</h3>
                            <h3 key={item.card.info.id}>Ratings: {item?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
                            <img src={IMG_CDN_URL + item?.card?.info?.imageId} />
                            </div>
                        </> 
                })}
                </div>
            </div>
        </> 
    ) : (
        <>
            <Shimmer />
        </>
    )
}

export default RestaurantMenu;