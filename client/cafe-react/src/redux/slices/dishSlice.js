import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: [],
};

export const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setAllDish: (state, action) => {
      state.dishes = action.payload;
    },
  },
});

export const { setAllDish } = dishSlice.actions;

export default dishSlice.reducer;
