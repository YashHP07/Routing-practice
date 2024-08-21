import React, { createContext, useState } from "react";
import SharabC from "./SharabC";

// Create context with a default value
export const UserContext = createContext("Sarab");

const SharabM = () => {
  const [state, setState] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={state}>
      <div>
        <h1>{state}</h1>
        <SharabC />
      </div>
    </UserContext.Provider>
  );
};

export default SharabM;

