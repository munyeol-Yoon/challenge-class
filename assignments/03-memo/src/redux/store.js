import { configureStore } from "@reduxjs/toolkit";
import { memoReducer } from "./reducers/memo.reducer";
const store = configureStore({
  reducer: { memo: memoReducer },
});

export default store;
