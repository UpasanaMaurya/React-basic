import React from "react";
import { useRef } from "react";

const UncontrolledForm = () => {
    const refObject = useRef();
    function handalSubmit(e) {
        e.preventDefault();
        console.log((refObject.current.value).toUpperCase());
    }
  return (
      <div>
          <h1>UncontrolledComponent</h1>
      <form onSubmit={handalSubmit}>
        <div className="form-group">
                  <input type="text" className="form-control" ref={ refObject } />
        </div>
        <div className="form-group">
          <input type="password " className="form-control" ref={refObject} />
        </div>

        <button className="btn-secondary">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
