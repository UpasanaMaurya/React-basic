import React, { createContext } from "react";
//import { useContext } from "react";
import DataA from './DataA'

const data = createContext();
const data1 = createContext();
const data2 = createContext();
const MainContext = () => {
  const personalDetail = { name: "upasana", gender: "femail" };
  const favorite_color = "blue";
  const qualification = "diploma";
  return (
    <div>
      <data.Provider value={personalDetail}>
        <data1.Provider value={favorite_color}>
          <data2.Provider value={qualification}>
         <DataA/>
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default MainContext;
export {data,data1,data2 };
