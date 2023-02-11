import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);
  const useMeme = useMemo(() => {
    console.log("**************************");
    return add * 10;
  }, [add]);
  return (
    <div>
      <div className="cotainer bg-info ">
        <div className="row">
          <div className="col bg-light">
            <span>{useMeme}</span>
            <br />
            <br />
            <button className="btn-success " onClick={() => setAdd(add + 1)}>
              ADD
            </button>
            <span>{add}</span>
            <br />
            <br />
            <button className="btn-success" onClick={() => setSub(sub - 1)}>
              SUB
            </button>
            <span>{sub}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
