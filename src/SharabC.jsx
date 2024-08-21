import React, { useContext } from "react";
import { UserContext } from "./C1"; // Import the context

const SharabC = () => {
  const user = useContext(UserContext); // Use the context

  return (
    <div>
      <h1>Component 2</h1>
      <h1>{user}</h1>
    </div>
  );
};

export default SharabC;
