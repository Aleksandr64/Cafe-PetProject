import { apiSlice } from "./apiSlice";

export const dishApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDish: builder.mutation({
      query: () => "Dish/GetAllDish",
    }),
  }),
});

export const { useGetAllDishMutation } = dishApiSlice;
