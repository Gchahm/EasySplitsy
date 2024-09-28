import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { splitSlice } from "./split/splitSlice";
import { persistCombineReducers } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducer = persistCombineReducers(persistConfig, {
  split: splitSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
