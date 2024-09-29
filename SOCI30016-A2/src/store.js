import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSlice from "./pages/rootSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootSlice);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
});

export const persistor = persistStore(store);
