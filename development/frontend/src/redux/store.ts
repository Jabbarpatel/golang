import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducers";

const store = configureStore({
  reducer: {
    Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
