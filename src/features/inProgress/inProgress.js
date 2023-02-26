import React from "react";
import { useSelector } from "react-redux";

const InProgress = () => {
  const progress = useSelector((state) => state.progress);
  if (!progress) {
    console.log("Loading");
  }
console.log(progress.length);

  return (
    <div>
      <div>
        <h2>In Progress</h2>
        <ul>
          {progress.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InProgress;
