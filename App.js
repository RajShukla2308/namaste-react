/***
 * Parcel Functionalities : 
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFIED
 * Cleaning our code
 * Dev and production build
 * superfast building algorithm
 * Image optimization - as it takes longest time to load on browser
 * Caching while development - delete parcel cache and rebuild - it will take more time to build
 * Compressions
 * Compatible with older versions of browsers
 * HTTPS on local dev - npx parcel index.html --https
 * manages port number (in case of two servers running in local)
 * Consistent hashing algorithms - uses to cache things
 * Zero config bundler
 * Tree shaking - removing unwanted code
 */


import React from 'react';
import ReactDOM from 'react-dom/client'

// React.createElement => Object => html(DOM)

// const heading  = React.createElement("h1",{
//     id:"title",
//     key:"2015" // to skip re rendiring when a new element is added as sibling.
// },"Namaste Everyone!");

// const heading2 = React.createElement("h2",{id:"title2"},"Namaste again");

// const container = React.createElement("div",{id: "container"},[heading,heading2])

// -------------

//react element is an object
//  console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// will see not rendered in browser
// const root = ReactDOM.createRoot(document.getElementById("root1"));

//passing a react element inside the root
//injects the element into DOM
// root.render(container);


// Example 2---------------

// const structure2 = React.createElement("div",{id:'data-container'},
//     React.createElement('h1',{id:'first-heading'},'This is first heading'),
//     React.createElement('h2',{id: 'second-heading'},'This is second heading')
// )
// root.render(structure2);

// end of Example2--------



// JSX ?? 
// JSX (converts to)=> React.createElement (which is an)=> Object 
// => (then converted into)html and pushed into DOM
const jsxHeading = (
    <h1 id="title" key="2015" className="heading">
       Food Villa
        </h1>
    ) // this is JSX, not a string
    // for multiple lines, add bracket

//const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)
 
// ------------------------

// React components

// functional components - New
// name of the component will start with capital letters (not mandate)

// class based components - Old
// name of the component will start with capital letters (not mandate)
const HeaderComp = () =>{
    return (<div>
         {jsxHeading} 
    <h1 id="fn" className='functional-comp'>Namaste from functional component1 </h1>
    <h2> this is h2 tag in fn comp 1</h2>
    {console.log('can write any js code')}
     </div>)
}

// same as above
const HeaderComponent2 = () => (
    <div>
        <h1 id="fn" className='functional-comp'>Namaste from functional component2 </h1>
        <h2> this is h2 tag in fn comp 2</h2>
     </div>
)


// Building food villa L5

/**
            - Header
                - Logo
                - Nav items
                - Cart
            - Body
                - Search bar
                - Restaurent List
                    - Restaurent Cards
                        - Image
                        - Name
                        - Rating
                        - Cuisines
            - Footer
                - Links
                - Copyright
 */

const Title = () =>(
    <a href='/'>
    <img 
    className='logo'
    alt='logo'
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    />
    </a>
)


const Header = () =>{
    return (
        <div className="header">
            <Title />
            <div className="nav-items"  key="h3">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList = [ 
    {
    "info": {
      "id": "14780",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg",
      "locality": "Hinjewadi",
      "areaName": "Hinjawadi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "img":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_253596.JPG",
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "11K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4f7987f3-257e-4e1e-bedc-e6cf0e9e5fec"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/pizza-hut-hinjewadi-hinjawadi-rest14780",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "253596",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_253596.JPG",
      "locality": "Tathawade",
      "areaName": "Tathawade",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "21K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4f7987f3-257e-4e1e-bedc-e6cf0e9e5fec"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/burger-king-tathawade-rest253596",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "752535",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/c5d8f076-7aea-43ee-902a-06df0f1eb852_752535.JPG",
      "locality": "Dattwadi",
      "areaName": "Puna wale",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "2.0K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4f7987f3-257e-4e1e-bedc-e6cf0e9e5fec"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/kfc-dattwadi-puna-wale-rest752535",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "759076",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
      "locality": "V J HAPPINESS STREET",
      "areaName": "HINJEWADI",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "2233",
      "avgRatingString": "4.6",
      "totalRatingsString": "585",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹109"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4f7987f3-257e-4e1e-bedc-e6cf0e9e5fec"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/the-belgian-waffle-co-v-j-happiness-street-hinjewadi-rest759076",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "331881",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/decf499f-1408-4f67-9e38-26072b2fe760_331881.JPG",
      "locality": "Marunji",
      "areaName": "Hinjawadi",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.6",
      "totalRatingsString": "344",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-16 22:50:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4f7987f3-257e-4e1e-bedc-e6cf0e9e5fec"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/kwality-walls-ice-cream-and-more-marunji-hinjawadi-rest331881",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "643827",
      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/19a46a25-cc86-4bbf-8383-89e0db3cb9bb_643827.JPG",
      "locality": "Mulshi",
      "areaName": "Marunji",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Keto",
        "Snacks"
      ],
      "avgRating": 4.6,
      "parentId": "355285",
      "avgRatingString": "4.6",
      "totalRatingsString": "208",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4f7987f3-257e-4e1e-bedc-e6cf0e9e5fec"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/wefit-protein-bowls-salads-and-sandwiches-mulshi-marunji-rest643827",
      "type": "WEBLINK"
    }
  }]

// desctructure {restaurant}
const RestaurantCard = ({ name, cuisines, avgRatingString, cloudinaryImageId })=>{
   //  const {name, cuisines, avgRatingString, cloudinaryImageId } = restaurant.info;
    return (
        <div className='card'>
            <img alt='food-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
                + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRatingString}</h4>
        </div>
    )
}

// props is passed in this - body is parent and restaurantcard is child
// no key <<<<< index key << unique key
const Body = () => {
    return (
    <div className='restaurant-list'>
        {
            restaurantList.map(item=>{
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
    )
}

const Footer = () => (
    <h4 className='footer'>
        Footer
    </h4>
)

const AppLayout = () =>{
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
