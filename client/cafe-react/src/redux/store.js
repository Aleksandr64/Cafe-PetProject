import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // виберіть тип зберігання, який ви хочете використовувати (наприклад, localStorage або AsyncStorage)
import { apiSlice } from "./API/apiSlice";
import cartReducer from "./slices/cartSlice";
import dishesReducer from "./slices/dishSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  dish: dishesReducer,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});
export const persistor = persistStore(store);
