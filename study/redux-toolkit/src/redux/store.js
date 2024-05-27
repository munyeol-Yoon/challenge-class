import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./slices/counter.slice";

const store = configureStore({
  reducer: { counter: countReducer },
});

export default store;
