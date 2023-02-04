import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//all reducers we will put inside our store.
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
}); //store will contain slices.

export default store;
