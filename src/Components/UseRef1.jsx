import React from "react";
import { useState } from "react";
import { useRef } from "react";

const UseRef1 = () => {
    const [name, setName] = useState('')
    const[email,setEmail]=useState('')
  const  refElement = useRef()
  console.log(refElement);
    const update = () => {
      setName('')
      refElement.current.focus();
      refElement.current.style.backgroundColor = "pink";

    }
    const update1 = () => {
      setEmail('')
      refElement.current.focus();
      refElement.current.style.backgroundColor = "pnik";
    }
  return (
      <div>
          <h1>I am use an other useRef1</h1>
      <div className="form-group">
        <input type="text" className="form-control" value={ name } onChange={ (e) => setName(e.target.value) } ref={ refElement} />
      </div>
      <button className="btn-info" onClick={update}>update</button>
      <br />
      <br />
      <div className="form-group">
        <input type="email" className="form-control" value={ email } onChange={ (e) => setEmail(e.target.value) } ref={ refElement } />
      </div>
      <button className="btn-info" onClick={update1}>update1</button>
    </div>
  );
};

export default UseRef1;
