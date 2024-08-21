import React from 'react';

function ComponentB({ count, setCount }) {
  return (
    <div>
      <h2>Component B</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default ComponentB;
