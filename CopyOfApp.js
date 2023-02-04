import React from "react";
// import ReactDOM from 'react-dom'; not supported now.
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       key: "h1"
//     },
//     "Heading 1 from parcel"
//   );

//   const heading2 = React.createElement(
//     "h2",
//     {
//       id: "title",
//       key: "h2"
//     },
//     "Heading 2"
//   );

//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading2]
//   );

//JSX: This is a html like syntax.
//This is a react element.
const heading = (
  <h3 id="title" key="h3">
    Namaste React coming from inside a react element.
  </h3>
); //if we are writing this in multiple lines then we have to wrap this in paranthesis.
//Perfectly valid javascript code and is known as JSX. This is not a string. It is known as react element now.

//Functional Component.
//   const HeaderComponent = () => {
//     return <div>
//     <h1>Namaste React Functional Component</h1>
//     <h2>This is a h2 tag</h2>
//     </div>;
//   }

// we can skip return and paranthesis.
const HeaderComponent = () => (
  <div>
    <h1>Namaste React Functional HeaderComponent</h1>
    <h2>Coming from a functional component</h2>
  </div>
);

var xyz = 10;
const HeaderComponent2 = () => {
  return (
    <>
      {
        // This is how we write comment inside JSX
        /* or we can multiline comment.
                Multiline Comment
                Is JSX Mendatory? No it is not mendatory.
                Is ES6 Mendatory? No
                Is Typescript Mendatory? No
                */
      }
      {xyz}
      {console.log("coming from console.log.", xyz)}
      {1 + 2}
      <HeaderComponent></HeaderComponent>
      {heading}
      <HeaderComponent />
      {<HeaderComponent />}
      {HeaderComponent()}
      <h1>Calling above components from HeaderComponent2</h1>
    </>
  );
};

//Inline style in react js.
//   const styleObj = {
//   backgroundColor: "yellow",
// };

// const jsx = (
//   <div style={styleObj}>
//     <h1>JSX</h1>
//     <h2>Second JSX</h2>
//   </div>
// );

// const jsx = (
//   <div style={{
//   backgroundColor: "yellow",
// }}>
//     <h1>JSX</h1>
//     <h2>Second JSX</h2>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer

root.render(heading);

root.render(<HeaderComponent />);
root.render(<HeaderComponent2 />); // This will override the things inside root.
