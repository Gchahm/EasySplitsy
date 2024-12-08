import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { splitSlice } from './split/splitSlice';
import { createReceiptSliceReducer } from '@/logic/store/createReceipt';

// const persistConfig = {
//   key: "root",
//   storage: typeof window === "undefined" ? AsyncStorage : storage,
// };

// const reducer = persistCombineReducers(persistConfig, {
//   split: splitSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    split: splitSlice.reducer,
    createReceipt: createReceiptSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
