// creating custom hook

// A custom hook is simply a function that uses one or more of the existing React hooks. It can accept parameters and return values, just like regular functions.


import { useState, useEffect } from 'react';

function useCustomHook(param) {
  // Define state variables or other hooks
  const [data, setData] = useState(null);

  // Use useEffect, useState, or other hooks
  useEffect(() => {
    // Side effects or other logic
    fetchData(param).then((result) => {
      setData(result);
    });
  }, [param]); // Make sure to include dependencies if needed

  // Return any values or functions needed by the component
  return { data };
}


// example 

import React from 'react';
import useCustomHook from './useCustomHook';

function MyComponent() {
  // Use the custom hook
  const { data } = useCustomHook('exampleParam');

  // Render based on the data returned by the custom hook
  return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>;
}


// creating a hook to fetch data form an api

import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
}
