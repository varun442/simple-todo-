import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        dispatch
      </button>
    </div>
  );
};

export default Counter;
