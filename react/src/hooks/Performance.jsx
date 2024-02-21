// Performance hooks
// useMemo and useCallback

// memoise the values and the functions

// thses are used for optimisation of the react app

// skip re-rendering when not req.

// use of chached calculations or to skip a re render if the data has not changed after the last render

// USEMEMO 
// it memoises the result of the funtion and only recomputes if any one of the dependencies has changed

import React, { useMemo } from 'react';

function MyComponent({ list }) {
  const total = useMemo(() => {
    console.log('Computing total...');
    return list.reduce((acc, item) => acc + item, 0);
  }, [list]);

  return <div>Total: {total}</div>;
}

//In this example, the total variable is memoized using useMemo, so it will only be recomputed when the list prop changes.



// USECALLBACK

// memoises functions 
//The useCallback hook is similar to useMemo, but it memoizes functions instead of values. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to child components that rely on reference equality.

import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
