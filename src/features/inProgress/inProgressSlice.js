import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const progressSlice = createSlice({
  name: "progress",
  initialState: [],
  reducers: {
    addProgress: (state, action) => {
      // console.log(todos);
      console.log(JSON.stringify(state));
      console.log(action);
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);
      console.log(todoIndex);

      if (todoIndex !== -1) {
        const todo = state[todoIndex];
        const newState = [todo];
        console.log("Current State: ", state);
        console.log("New State: ", newState);
        return newState;
      }
    },
  },
});

export const { addProgress } = progressSlice.actions;
export default progressSlice.reducer;
