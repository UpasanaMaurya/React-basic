import React from "react";
import { useState } from "react";
import { useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const refElement = useRef("");
  function updateMobile() {
    setMobile();
    refElement.current.focus();
    refElement.current.style.color = "white";
    refElement.current.style.backgroundColor = "red";
    refElement.current.style.border = "2px solid black";
  }
  return (
    <>
      <div className="form-control">
        <input
          type="text"
          className="form-group"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn-info"
          onClick={() => {
            setName("u");
          }}
        >
          Reset
        </button>
      </div>
      <br />
      <br />
      <div className="form group">
        <input
          type="number"
          className="form-control"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          ref={refElement}
        />
        <button className="btn-primary" onClick={updateMobile}>
          update mobile
        </button>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" />
      </div>
    </>
  );
};

export default UseRef;
