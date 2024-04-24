import React from "react";
import ReactDOM from "react-dom/client";

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

const parent = React.createElement("div", { class: "parent" }, [
  React.createElement(
    "h1",
    { id: "child1" },
    "Hi Im h1 tag created in App2.js"
  ),
  React.createElement(
    "h2",
    { id: "child2" },
    "Hi I am H2 tag created by App2.js"
  ),
  React.createElement(
    "h1",
    { id: "child1" },
    "Hi Im h1 tag created in App2.js"
  ),
  React.createElement(
    "h2",
    { id: "child2" },
    "Hi I am H2 tag created by App2.js"
  ),
]);

root2.render(parent);

// code of APP.js initial

// const root = ReactDOM.createRoot(document.getElementById("root1"));

// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //attributes
//   "Hello world from react." //Children
// );

// //attributes and childrens are props
// root.render(heading);

// //Before this code goes to js engine it is transpiled. This job is done by parcel
// const jsxheading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     My javascript heading using jsx syntax
//   </h1>
// );

// root.render(jsxheading);

// const TitleComp = () => (<h1 className="title">Title component</h1>);
// p = () => (<h1>Namaste functional comp</h1>); //if single line functional component
// const HeadingComponent = () => {
//   return (
//     <div id="HeadingTitle">
//       <TitleComp />
//       {100 + 3000}
//       {jsxheading}
//       <h1>Namaste functional component</h1>
//     </div>
//   );
// };

// //render react component like
// root.render(<HeadingComponent />)

// const Title = () => <h1> Title Component</h1>;
// const Heading = () => {
//   return (
//     <div id="HeadingTitle">
//       <Title />
//       <Title></Title>
//       {Title()}
//       {100 + 3000}
//       {jsxheading}
//       <h1>Namaste functional component</h1>
//     </div>
//   );
// };

//render react component like
// root.render(<Heading />);
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "children" }, "I am an h1 tag")
//   )
// );

// root.render(parent);

// const parent2 = React.createElement(
//   "div",
//   { id: "parent2" },
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "children21" }, "I am an h1 tag"),
//     React.createElement("h2", { id: "children22" }, "I am an h2 tag"),
//   ])
// );

// root.render(parent2);
