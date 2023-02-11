import React from "react";
import { createContext } from "react";
//import { useContext } from "react";
import Data1 from "./Data1";

//const CreateContext=useContext()
const data = createContext();
const data1 = createContext();
const Context = () => {
  const name = "upasana";
  const gender = "femail";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Data1 />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default Context;
export { data, data1 };
