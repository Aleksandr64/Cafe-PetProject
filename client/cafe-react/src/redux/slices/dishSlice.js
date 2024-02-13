import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  dishes: [],
};

export const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    getAllDish: (state, action) => {
      state.dishes = action.payload;
    },
  },
});

export const { getAllDish } = dishSlice.actions;

const dishReducer = persistReducer(
  {
    key: "dishes",
    storage: storage,
    whitelist: ["dishes"],
  },
  dishSlice.reducer,
);

export default dishReducer;
