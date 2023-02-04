// import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import {errorElement} from "./src/assets/components/Error";
import React from "react";
import ReactDOM from "react-dom/client";
// import RestaurantMenu from "./src/assets/components/RestaurantMenu";
// This configuration will decide what will happen if i load a certain page.
//taken an array.

const Body = () => {
  return <h4>Body</h4>;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Outlet/> */}
      <Footer />
    </>
  );
};

//React Fragment:It is a component which is exported by this React.
//It is like an empty tag.
//<> : shorthand for React.Fragment

// const jsx = (
//   <>
//     <h1>JSX</h1>
//     <h2>Second JSX</h2>
//   </>
// );

const styleObj = {
  backgroundColor: "yellow",
};

const jsx = (
  <div style={styleObj}>
    <h1>JSX</h1>
    <h2>Second JSX</h2>
  </div>
);

const Title = () => (
  // <h1 id="title" key="h2">
  //   Food Villa
  // </h1>
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const HeaderComponent = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

/*
Header 
   Logo (Title)
   Nav Bar (Right Side)
   Cart
Body
  Search Bar
  RestrauntList
  RestraintCard
    Image
    Name
    Rating 
    Cusines
Footer
  Links
  Copyright
* */

// const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element :<AppLayout/>,
//       errorElement:<Error/>,
//       children: [
//         {
//             path: "/",
//             element :<Body/>
//         },
//         {
//             path: "/about",
//             element :<About/>
//         },
//         {
//             path: "/contact",
//             element :<Contact/>
//         },
//         {
//             path: "/restaurants/:id",
//             element :<RestaurantMenu/>
//         },
//       ]
//     }
//  ]
//  )

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router= {appRouter}/>)

// root.render(<HeaderComponent />);
root.render(jsx);
