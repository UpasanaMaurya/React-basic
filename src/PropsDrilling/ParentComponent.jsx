import React from "react";
import ChildA from "./ChildA";

const ParentComponent = () => {
  const name = "upasana";

  return (
    <div>
      <h1>I am parentComponent</h1>
      <ChildA name={name} />
    </div>
  );
};

export default ParentComponent;
