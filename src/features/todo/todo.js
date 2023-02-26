import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "./todosSlice";
import { addProgress } from "../inProgress/inProgressSlice";
const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function handleToggle(todoId) {
    dispatch(toggleTodo(todoId));
  }
  console.log(todos);
  return (
    <>
      <input
        type="text"
        placeholder="Enter To Do"
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(inputValue));
        }}
      >
        Input
      </button>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <>
            <p
              key={todo.id}
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </p>
            <button
              onClick={() => {
                dispatch(addProgress(todos, todo.id))
              }}
            >
              Add to Progress
            </button>
          </>
        ))}
      </ul>
    </>
  );
};

export default Todo;
