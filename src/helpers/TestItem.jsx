import React from "react";

export const TestItem = ({ item, width }) => {
  return (
    <div className="test-item" style={{ width: width }}>
      <img
        className="test-img"
        src={item.icon.default}
        alt={"review svg"}
      ></img>
      <div className="test-text">
        <h1>{item.blockquote}</h1>
        <p>{item.name}</p>
      </div>
    </div>
  );
};
