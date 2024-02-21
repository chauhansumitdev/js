// context hooks

// context lets recieve the information from the distant parent with out explicitly passing it as prop

// useContext

// use React.createcontext()
// this create a context object that has the Provider component and the consumer component.

// ThemeContext.js
const ThemeContext = React.createContext();

export default ThemeContext;

// wrap the component that needs the access to the contest using Provider

// App.js
import React from 'react';
import ThemeContext from './ThemeContext';

function App() {
  const theme = 'light';

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;


// consuming the context in the child component

// Toolbar.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Toolbar;

// FINAl 

///////////////////////////////
// ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext();

export default ThemeContext;

///////////////////////////////////
// App.js
import React from 'react';
import ThemeContext from './ThemeContext';
import Toolbar from './Toolbar';

function App() {
  const theme = 'light';

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;
////////////////////////////////////////
// Toolbar.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Toolbar;


// createcontext - give its initial value - provide it in a comp <comp.provider value = {theme}> - consume .