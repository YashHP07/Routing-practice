// import React, { useState, useEffect } from 'react';

// export function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//     alert('button clicked')
//   },[]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';

// export function Example() {
//   // Declare a state variable "count" with initial value 0
//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//     alert('button is clicked')
//   },[])
//   // Function to handle incrementing the count
 
//   // Function to handle decrementing the count
 

//   return (
//     <div>
//       <button onClick={(()=>{
//         setCount(count + 1);
//       }
      
//       )}>Click Me {count}</button>

//     </div>
//   );
// }

import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

export function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}



