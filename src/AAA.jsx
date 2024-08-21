import React, { useState } from 'react';
import ComponentB from './BBB';
import ComponentC from './CCC';

function ComponentA() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ComponentB count={count} setCount={setCount} />
      <ComponentC count={count} setCount={setCount} />
    </div>
  );
}

export default ComponentA;
