import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import dishesReducer from "./slices/dishSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dish: dishesReducer,
  },
});
