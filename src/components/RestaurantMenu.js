import { useEffect, useState } from "react";
import useRestaurant from "../utils/useRestaurant";

import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // const params = useParams();
  // const { resId } = params;
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant Id: {resId}</h1>
        <h2>Restaurant Name: {restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <h3>Area : {restaurant?.area}</h3>
        <h3>City: {restaurant?.city}</h3>
        <h3>Rating: {restaurant?.avgRating} stars</h3>
        <h3>Cost of two: {restaurant?.costForTwoMsg}</h3>
      </div>
      {/* <div>Restaurant Menu: {console.log("restaurant", restaurant)}</div> */}
      <h1>Menu</h1>
      <ul>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <li key={item.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
