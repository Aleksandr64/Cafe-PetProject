import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (credentials) => ({
        url: "Order/AddNewOrder",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = authApiSlice;
