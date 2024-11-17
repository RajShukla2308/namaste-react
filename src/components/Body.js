import { restaurantList, IMG_CDN_URL } from "./constants";
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';


function filterData(searchText, restaurants){
    if(searchText == '') return '';
    return restaurants.filter(item=>{
        if(item?.info?.name.includes(searchText)){
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
    const [restaurants, setRestaurants] = useState(restaurantList);


    return (
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
               const data = filterData(searchText, restaurants);
               // update restaurants
               if(data == '') setRestaurants(restaurantList)
                else setRestaurants(data);
            }
        }>Search</button> {searchText}
    </div>
    <div className='restaurant-list'>
        {
            restaurants.map(item=>{
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