import { useState, useContext, useEffect } from "react"; //named import //facebook developers wrote this.
import { restrauntList } from "./constant";
import RestrauntCard from "./RestrauntCard";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useParams } from "react-router-dom";

const Body = () => {
  const { user, setUser } = useContext(UserContext); //destructuring
  // const searchText = "KFC"; //local variables like this are not preferred in react.
  const { resId } = useParams();
  const [searchText, setSearchText] = useState("");

  // const [searchClicked, setSearchClicked] = useState("false");

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [restaurantsCopy, setRestaurantCopy] = useState(restrauntList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // console.log("render inside Body JS");
  const isOnline = useOnline(); //Custom Hook
  if (!isOnline) {
    // early return
    return <h1>Offline, Please check your internet connection!!</h1>;
  }

  //Conditional Rendering.
  // if (!restaurants) {
  //   return null;
  // }

  //Avoid rendering component.This is known as early return.

  if (!allRestaurants) {
    return null;
  }

  // if (filteredRestaurants.length === 0) {
  //   return <h1>No restaurant match your filter.</h1>;
  // }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container"></div>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value); //e.target.value : whatever u write in input.
        }}
      />
      {/* // This is known as two way data binding. */}
      {/* <h1>{searchClicked}</h1> */}
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>

      <input
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      ></input>

      <input
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
      ></input>

      {/* <h1>{searchText}</h1> */}
      <div className="restaurant-list">
        {/* <RestrauntCard restraunt={restrauntList[0]} /> */}
        {/* Instead of writing and passing each prop separately we can use spread operator */}
        {/* <RestrauntCard {...restrauntList[0].data} />
        <RestrauntCard {...restrauntList[1].data} />
        <RestrauntCard {...restrauntList[2].data} /> */}
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurant match your filter.</h1>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestrauntCard {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
