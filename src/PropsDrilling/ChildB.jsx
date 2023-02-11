import React from "react";
import ChildC from "./ChildC";

const ChildB = ({name}) => {
  return (
    <div>
      <h1>I am ChildB</h1>
      <ChildC name={name}/>
    </div>
  );
};

export default ChildB;
