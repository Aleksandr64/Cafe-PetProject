import { apiSlice } from "./apiSlice";

export const testApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTest: builder.mutation({
      query: () => "Test/TestAuthAttribute",
    }),
  }),
});

export const { useGetTestMutation } = testApiSlice;
