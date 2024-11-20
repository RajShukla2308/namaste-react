import { restaurantList, IMG_CDN_URL } from "./constants";
import RestaurantCard from './RestaurantCard';
import {useState, useEffect} from 'react';
import { Shimmer } from "./Shimmer";


function filterData(searchText, restaurants){
    if(searchText == '') return '';
    return restaurants.filter(item=>{
        if(item?.info?.name.toLowerCase().includes(searchText.toLowerCase())){
            return item;
        }
    })
}
 

// props is passed in this - body is parent and restaurantcard is child
// no key <<<<< index key << unique key
const Body = () => {
    //let searchText = 'KFC';

    // searchText is a local state variable
    const [searchText, setSearchText] = useState(); // to create state variables
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    /** 
    use Effect will get called on every re render. if we want it to be depended on anything,
    we will just pass the property on the dependency array and it will get called whenever the 
    dependency changes.
    */ 
    /**
     * If dependency array is empty, userEffect will get called once after first render
     * If dependency array is [searchText], It will get called after first render 
     * + each time after render(when the searchtext changes)
     */

    useEffect(()=>{
        //console.log("useEffect called")
        getRestaurants();
    },[]) // dependency array
   // console.log('comp render')

   async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   if(filteredRestaurants?.length == 0){
    return <h1> No restaurants found...</h1>
   }
    return allRestaurants?.length === 0 ? (<Shimmer />) : (
    <>
    <div className="search-container">
        <input type="text"
         placeholder="search"
        value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value);
        }}
           />
        <button className="search-btn" onClick={
            ()=>{
               const data = filterData(searchText, allRestaurants);
               // update restaurants
                setFilteredRestaurants(data);
            }
        }>Search</button> {searchText}
    </div>
    <div className='restaurant-list'>
        {   
            filteredRestaurants?.map(item=>{
                return <RestaurantCard {...item.info} key={item.info.id}/>
                }
            )
        }

        {/* <RestaurantCard {...restaurantList[1].info} />
        <RestaurantCard {...restaurantList[2].info}/>
        <RestaurantCard {...restaurantList[3].info}/>
        <RestaurantCard {...restaurantList[4].info}/>
        <RestaurantCard {...restaurantList[5].info}/> */}
    </div>
    </>
    )
}

export default Body;