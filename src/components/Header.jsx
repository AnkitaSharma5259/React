// This is known as named import.
import { useState, useContext } from "react";
import useOnline from "../utils/useOnline";
import { Title } from "./Title";
import UserContext from "../utils/userContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; //bridge between ur react store and ur component.

const loggedInUser = () => {
  //API call to check authentication.
  return true;
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [title, setTitle] = useState("Food Villa");

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartItems", cartItems);
  // console.log("render");
  // const [getLocalVariables, setLocalVariable] = useLocalStorage();
  return (
    <div className="header">
      <Title />
      {/* <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>Change Title</button> */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart" data-testid="cart">
              Cart {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>

      <h1 data-testid="online-status">
        {isOnline ? "You are online" : "You are offline"}
      </h1>
      <h1 className="p-10 font-bold text-red-900">
        {user.name}-{user.email}
      </h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};

// export default Header;
