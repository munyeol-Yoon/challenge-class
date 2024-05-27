import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (prevState, action) => {
      // action.type => "counter/INCREMENT" 알아서 해줌
      const value = action.payload;

      // before
      // return {...prevState, count: state.count + value};

      // after
      // 불변성이 무시됨
      prevState.count = prevState.count + value;
    },
    decrement: (prevState, action) => {
      const value = action.payload;

      prevState.count = prevState.count - value;
    },
  },
});

export const countReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
