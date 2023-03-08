//This is known as default import.
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import NewHeader from "./assets/components/Header.jsx"; //Default import. We can even rename this to any name.
import * as XYZ from "./components/Header";
import Body from "./components/Body.js"; // we can write the extension as well but optional.
//import { Footer } from "./assets/components/Footer"; // This is known as named import.This is not object destructuring.

// Sometimes using extensions can break whenever u r using the external library.

//import ToDoList from "./TODOLIST/ToDoList";
import ToDoList from "./TODOLIST/ToDoList";
import { Provider } from "react-redux";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
//OR
import * as obj from "./components/Footer"; // We can do this.
import UserContext from "./utils/userContext";
import Instamart from "./components/Instamart";
import store from "./utils/store";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
const Footer = obj.Footer;

//Config Driven UI:

// it is for lazy loading. It is a dynamic import.
//On demand loading, on demand import, dynamic import, code splitting, bundle chunking.
//Upon on demand loading => Upon render => React suspends the loading.
// const Instamart = lazy(() => {
//   import("./components/Instamart"); //Give path of the file here. // It returns a promise.
// });

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Namaste React",
    email: "support@namastedev.com",
  });

  //u can modify ur user context using a provider.
  return (
    <Provider store={store}>
      {/* similar to React.Fragment */}
      <XYZ.Header />
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

//Routing Configuration. This configuration will decide what will happen if I go to a certain path.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //localhost:1234/about/profile. so dont give slash. /profile then localhost:1234/profile. / means from the root.
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/instamart",
      //   element: (
      //     <Suspense fallback={<Shimmer />}>
      //       <Instamart />
      //     </Suspense>
      //   ),
      // },
    ],
  },
]);

const appRouter2 = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //localhost:1234/about/profile. so dont give slash. /profile then localhost:1234/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/ToDoList",
        element: <ToDoList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter2} />);
