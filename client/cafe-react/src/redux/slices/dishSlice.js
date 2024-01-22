import { createSlice } from "@reduxjs/toolkit";

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
export default dishSlice.reducer;
