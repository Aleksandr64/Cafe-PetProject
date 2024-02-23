import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../slices/authSlice";
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
} from "../slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5179/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = selectCurrentAccessToken(getState()); // Використовуємо селектор для отримання аксес токену
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result?.error?.status === 401) {
    console.log("sending refresh token");
    const refreshData = await getNewAccessToken(api);
    if (refreshData) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshData, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

const getNewAccessTokenSettings = {
  url: "Auth/GetNewAccessToken",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getNewAccessToken = async (api) => {
  const accessToken = selectCurrentAccessToken(api.getState()); // Використовуємо селектор для отримання аксес токену
  const refreshToken = selectCurrentRefreshToken(api.getState());
  const requestBody = {
    accessToken,
    refreshToken,
  };
  try {
    const response = await baseQuery(
      {
        ...getNewAccessTokenSettings,
        body: JSON.stringify(requestBody),
      },
      api,
    );
    if (response.error) {
      throw new Error("Failed to get new access token");
    }
    const responseData = response.data;
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error getting new access token:", error);
    throw error;
  }
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
