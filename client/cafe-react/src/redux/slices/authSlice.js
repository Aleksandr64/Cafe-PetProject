import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // або будь-яке інше зберігання, яке ви вибрали

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, actions) => {
      const { accessToken, refreshToken, userName } = actions.payload;
      state.user = userName;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentRefreshToken = (state) => state.auth.refreshToken;

export const { setCredentials, logOut } = authSlice.actions;

const authReducer = persistReducer(
  {
    key: "auth",
    storage: storage,
    whitelist: ["user", "accessToken", "refreshToken"], // Список ключів, які ви хочете зберегти
  },
  authSlice.reducer,
);

export default authReducer;
