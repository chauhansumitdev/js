// useRef
// it creates a mutable variable which will not re render the components
// with the use of useRef we can use access the DOM elements directly

// returns an object 

import React, { useRef } from 'react';

function MyComponent() {
  // Initialize a ref object
  const myRef = useRef(initialValue);

  // Accessing the current value
  console.log(myRef.current);

  // Modifying the current value
  myRef.current = newValue;

  return <div>Hello</div>;
}


// refering dom elements directly 
function TextInputWithFocusButton() {
    const inputRef = useRef(null);
  
    const focusTextInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <>
        <input ref={inputRef} type="text" />
        <button onClick={focusTextInput}>Focus Input</button>
      </>
    );
  }

// no re render
function Timer() {
    const intervalRef = useRef(null);
  
    const startTimer = () => {
      intervalRef.current = setInterval(() => {
        console.log("Timer tick");
      }, 1000);
    };
  
    const stopTimer = () => {
      clearInterval(intervalRef.current);
    };
  
    return (
      <>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </>
    );
  }
  

  /**
   * The current property of the returned object is mutable, so you can modify it directly.
Changes to current do not cause a re-render.
Assigning a value to ref.current will not trigger a re-render of the component.
The ref object persists for the entire lifetime of the component.
   */