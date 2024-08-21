import React from 'react';

function ComponentC({ count, setCount }) {
  return (
    <div>
      <h2>Component C</h2>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
}

export default ComponentC;
