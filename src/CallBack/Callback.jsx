import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import User from "./User";

const Home = () => {
  const [add, setAdd] = useState(0);

  const Learning = useCallback(() => {
    //Some operation
  }, []);
  return (
    <div className="m-auto">
      <h1>I am learning CallBack</h1>
      <h3>{add}</h3>
      <button
        className="btn-dark"
        onClick={() => {
          setAdd(add + 5);
        }}
      >
        Added
      </button>
      <User Learning={Learning} />
    </div>
  );
};

export default Home;
