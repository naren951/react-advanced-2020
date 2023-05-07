import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("random title");
  const handleClick = () => {
    if (title === "random title") {
      setTitle("New Title");
    } else {
      setTitle("random title");
    }
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
