import React, { createContext, useState, useContext } from "react";

let IndependentContext = createContext(Object());
let IndependentChange = createContext(null);

export const useIndependent = () => {
  return useContext(IndependentContext);
};

export const useChangeIndependent = () => {
  return useContext(IndependentChange);
};

export function IndependentProvider(props) {
  let { children } = props;
  const [independentData, setIndependentData] = useState({
    User: Object(),
    Producto: Object(),
  });

  const changeValues = (field, value) => {
    let newIndependentFields = { ...independentData };
    newIndependentFields[field] = value;
    setIndependentData(newIndependentFields);
  };

  return (
    <IndependentContext.Provider value={independentData}>
      <IndependentChange.Provider value={changeValues}>
        {children}
      </IndependentChange.Provider>
    </IndependentContext.Provider>
  );
}
