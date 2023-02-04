import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/constant";

//Custom Hook
//suppose if my params changes then our data should also change.
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  //Get Data From API
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
