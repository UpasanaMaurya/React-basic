import React from "react";
import { data, data1 } from "./Context";
const Data3 = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h1>
                    My Name is {name},And My Gender is  {gender}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default Data3;
