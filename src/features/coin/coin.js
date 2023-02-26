import React from "react";
import { useSelector } from "react-redux";
const Coin = () => {
  const count = useSelector((state) => state.counter.count);
  const themeTextColor = useSelector((state) => state.theme.color);

  return (
    <div>
      <span style={{ color: themeTextColor }}>Count: {count}</span>
    </div>
  );
};

export default Coin;
