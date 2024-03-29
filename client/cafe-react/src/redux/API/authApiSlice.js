import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "Auth/Login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    registration: builder.mutation({
      query: (credentials) => ({
        url: "Auth/RegisterUser",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: `Auth/Logout`,
        method: "POST",
        params: {
          accessToken: token,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation } =
  authApiSlice;
