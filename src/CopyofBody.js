import { useState } from "react"; //named import //facebook developers wrote this.
import { restrauntList } from "./constant";
import RestrauntCard from "./RestrauntCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  // const searchText = "KFC"; //local variables like this are not preferred in react.

  const [searchText, setSearchText] = useState("");

  // const [searchClicked, setSearchClicked] = useState("false");

  const [restaurants, setRestaurants] = useState(restrauntList);
  // const [restaurantsCopy, setRestaurantCopy] = useState(restrauntList);

  console.log(restaurants);
  return (
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
          const data = filterData(searchText, restaurants);
          setRestaurants(data);
        }}
      >
        Search
      </button>
      {/* <h1>{searchText}</h1> */}
      <div className="restaurant-list">
        {/* <RestrauntCard restraunt={restrauntList[0]} /> */}
        {/* Instead of writing and passing each prop separately we can use spread operator */}
        {/* <RestrauntCard {...restrauntList[0].data} />
        <RestrauntCard {...restrauntList[1].data} />
        <RestrauntCard {...restrauntList[2].data} /> */}
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard key={restaurant.data.id} {...restaurant?.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
