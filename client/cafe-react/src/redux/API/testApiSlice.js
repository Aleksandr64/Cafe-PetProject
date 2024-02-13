import { apiSlice } from "./apiSlice";

export const testApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => "Test/TestAuthAttribute",
    }),
  }),
});

export const { useGetTestQuery } = testApiSlice;
