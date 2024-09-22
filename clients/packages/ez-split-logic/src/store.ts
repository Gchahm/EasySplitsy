import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { splitSlice } from "./split/splitSlice";

export const store = configureStore({
    reducer: {
        split: splitSlice.reducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>;
