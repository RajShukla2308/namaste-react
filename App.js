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
 * 
 */


import React from 'react';
import ReactDOM from 'react-dom/client'

const heading  = React.createElement("h1",{
    id:"title"
},"Namaste Everyone!");

const heading2 = React.createElement("h2",{id:"title2"},"Namaste again");

const container = React.createElement("div",{id: "container"},[heading,heading2])

// -------------

//react element is an object
//  console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// will see not rendered in browser
// const root = ReactDOM.createRoot(document.getElementById("root1"));

//passing a react element inside the root
//injects the element into DOM
root.render(container);


// Example 2---------------

const structure2 = React.createElement("div",{id:'data-container'},
    React.createElement('h1',{id:'first-heading'},'This is first heading'),
    React.createElement('h2',{id: 'second-heading'},'This is second heading')
)
root.render(structure2);

// end of Example2--------