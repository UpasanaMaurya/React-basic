import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCounter] = useState(5);
  return (
    <>
      <button className="btn-success" onClick={()=>setCounter(count+1)}>+</button>
          <button>{ count}</button>
      <button className="btn-success"  onClick={()=>setCounter(count-1)}>-</button>
    </>
  );
};

export default UseState;
