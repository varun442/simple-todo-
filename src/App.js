import "./App.css";
import React, {useState} from "react";
import {FaCheck, FaTrash, FaPlusCircle} from 'react-icons/fa'
// import Coin from "./features/coin/coin";
// import Counter from "./features/counter/counter";
// import Theme from "./features/theme/theme";
// import Todo from "./features/todo/todo";
// import InProgress from "./features/inProgress/inProgress";
function App() {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };

  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInProgress([item, ...inProgress]);
    const filterArray = todos.filter((x) => x.id !== id);
    setTodos(filterArray);
  };

  const deleteTodo = (id) => {
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };

  const addtoCompleted = (id) => {
    const item = inProgress.find((x) => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inProgress.filter((x) => x.id !== id);
    setInProgress(filterarray);
  };
  console.log(todos);

  return (
    <>
      <div className="App">
        <div className="container">
          <h3 className="title">ToDo List App</h3>
          <form action="" className="form_todo">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
              setInput(e.target.value);
              }}
              placeholder="Enter a Task"
            />
            <button type="button" className="btn" onClick={() => addTodo()}>
              <FaPlusCircle className="icon" />
            </button>
          </form>
          <div className="todos_wrapper">
            <div className="todos_list">
              <h3 className="todo_title">To Do List</h3>
              {todos.map((item, index) => (
                <div className="todo_card" key={item.id}>
                  <p className="card_text">{item.text}</p>
                  <FaCheck
                    onClick={() => addToProgress(item.id)}
                    className="icon-check-todo"
                  />
                  <FaTrash
                    onClick={() => deleteTodo(item.id)}
                    className="icon-trash-todo"
                  />
                </div>
              ))}
            </div>
            <div className="todos_list">
              <h3 className="todo_title">InProgress</h3>
              {inProgress.map((item, index) => (
                <div className="progress_card" key={item.key}>
                  <p className="card_text">{item.text}</p>
                  <FaCheck
                    onClick={() => addtoCompleted(item.id)}
                    className="icon-progress-todo"
                  />
                </div>
              ))}
            </div>
            <div className="todos_list">
              <h3 className="todo_title">Completed</h3>
              {completed.map((item, index) => (
                <div className="completed_card" key={item.id}>
                  <p className="card_text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

