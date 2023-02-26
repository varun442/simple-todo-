import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "./features/counter/counterSlice";
import todoReducer from "./features/todo/todosSlice";
import progressReducer from "./features/inProgress/inProgressSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todos: todoReducer,
  progress: progressReducer,
});
const store = configureStore(rootReducer);

export default store;
