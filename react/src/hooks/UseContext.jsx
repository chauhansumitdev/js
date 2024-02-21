import React, { useContext } from 'react';

// Create a context
const ThemeContext = React.createContext();

// Child component consuming the context value
function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// Parent component providing the context value
function App() {
    const theme = 'light';
  
    return (
      <ThemeContext.Provider value={theme}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  export default App;
