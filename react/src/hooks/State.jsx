// state hooks
 
// these hooks are used to remember the things

// include - > useState and useReducer

// useState -> declares a state variable that can be updated directly
// useReducer -> declare the state variable with the update logic inside the reducer function. handels more complex state logic.

// useState
// it returns an array of two elements the current state value and the function to update that value.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// initial state 
const initialState = 0;
const [count, setCount] = useState(initialState);


// useReducer

// handles more complex logic

// concepts 
// at the heart of this is a reducer function that take two arguments
// the current state and the action

// state, action refs -> action obj k.o.
const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
};

  // actions are js objects 
  // these actions are dispatched(sent) by the dispatch fn
  dispatch({ type: 'increment' });
  // { type: 'increment' } > obj.


const initialState = 0;
const [state, dispatch] = useReducer(reducer, initialState);

// how this works ->
// when the action is dispatched 
// the reducer function is called with the current state and the action
// the reducer then returns the new state which becomes the new state .

import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;


