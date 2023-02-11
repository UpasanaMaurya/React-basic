import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const handalInput = (e) => {
    console.log(e.target.value);
    if ((e.target.name === "Fullname")) {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPswd(e.target.value);
    }
  };
  return (
    <div>
      <h1>controlledComponent</h1>
          <form action="">
          <div className="form-group">
        <input
          type="text"
          name="Fullname"
          value={name}
          className="form-control"
          onChange={handalInput}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={pswd}
          name="password"
          className="form-control"
          onChange={handalInput}
        />
      </div>

      <button className="btn-secondary">Submit</button>
     </form>
    </div>
  );
};

export default Form;
