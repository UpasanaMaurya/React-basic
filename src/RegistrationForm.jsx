import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RegistrationForm = () => {
  const data = { name: "", email: "", password: "" };
    const [inputName, setInputName] = useState(data);
    const[flag,setFlag]=useState(false)
  const handalInput = (e) => {
    setInputName({ ...inputName, [e.target.name]: e.target.value });
    console.log(inputName);
    };
    useEffect(() => {
        console.log('Registered');
    },[flag])
    const handalSubmit = (e) => {
        e.preventDefault();
        if (!inputName.name || !inputName.email || !inputName.password) {
            alert('All fields are Mandatory')
        }
        else {
            setFlag(true)
        }
    }
  return (
      <div>
          <pre>{ (flag) ? <h2 className="ui-define">hello{ inputName.name},You have Registered Successfully</h2>:""}</pre>
          <form onSubmit={handalSubmit}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h1 className="bg-primary text-center"> Registration Form</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <label>name</label>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                value={inputName.name}
                onChange={handalInput}
              />
            </div>
            <label>email</label>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                value={inputName.email}
                onChange={handalInput}
              />
            </div>
            <label>password</label>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control "
                value={inputName.password}
                onChange={handalInput}
              />
            </div>
            <input type="button" className="btn-primary w-100" value="submit" />
          </div>
        </div>
              </div>
              </form>
    </div>
  );
};

export default RegistrationForm;
