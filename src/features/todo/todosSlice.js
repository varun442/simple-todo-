import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
  ],
  reducers: {
    addTodo: (state, action) => {
      console.log("todoslice" +JSON.stringify(state));
      state.push({
        id: Math.floor(Math.random() * 1000),
        text: action.payload,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
