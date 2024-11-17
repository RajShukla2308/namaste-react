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


// Default import
import Header from "./components/Header.js"; // both Header and Header.js will work
import Body from './components/Body.js';
import Footer from './components/Footer.js';

// Named import
import {Title} from './components/Header';

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
