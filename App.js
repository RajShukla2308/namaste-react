const heading  = React.createElement("h1",{
    id:"title"
},"Namaste Everyone!");

const heading2 = React.createElement("h2",{id:"title2"},"Namaste again");

const container = React.createElement("div",{id: "container"},[heading,heading2])

//react element is an object
//  console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// will see not rendered in browser
// const root = ReactDOM.createRoot(document.getElementById("root1"));

//passing a react element inside the root
//injects the element into DOM
root.render(container);