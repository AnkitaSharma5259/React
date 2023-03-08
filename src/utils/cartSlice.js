//Creating a slice in this file.

import { createSlice } from "@reduxjs/toolkit";
//we r creating a cart slice inside the store. and the initialState is empty array.
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["bananas", "apples"],
  },
  reducers: {
    //Mapping between action and reducer ki which reducer will call which action.
    addItem: (state, action) => {
      state.items.push(action.payload);
      //never return anything from here.It takes a state and directly modifies it.
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//cartSlice it is a big object.
// cartSlice = {
//   reducer: reducers,
//   actions: {
//     addItem,
//     removeItem,
//     clearCart,
//   },
// };
//reducers will modify our state.
//We will modify our cart by creating a reducer funtion.
//when r these reducers called, on dispatch of an Action.
//addItem: (state, action) => {}, state is initial state and action payload is data which is coming in.
//This state is always the previous state.

//we will export actions and reducers from this slice.
//Its not reducers. its reducer only.//It combines all reducers and passes as reducer.

//exporting actions.
