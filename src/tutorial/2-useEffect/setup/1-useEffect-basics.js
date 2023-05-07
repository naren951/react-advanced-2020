import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("UseEffect");
    if (value >= 1) {
      document.title = value;
    }
  }, [value]);
  console.log("Render");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button
        className="btn"
        onClick={() => setValue((prevValue) => prevValue + 1)}
      >
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
