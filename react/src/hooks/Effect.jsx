// Effect hook

// useEffect

// handels side effects like data fetching etc...

// syntax 
// useEffect ( function , [dependency array]);

// the use of dependency array
// the effect will only rerun when any of the dependencies have changed after the last render

// one time call - empty dependency array

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  
  