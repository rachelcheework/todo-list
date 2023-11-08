import logo from './logo.svg';
import './App.css';
import Todo from './pages/Todo';
import React, { useState, useEffect } from 'react';
import Loading from './pages/Loading';

function App() {

  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate loading data (replace this with your actual data loading logic)
    setTimeout(() => {
      // setData(['Item 1', 'Item 2', 'Item 3']);
      setLoading(false);
    }, 2000); // Simulating a 2-second loading delay
  }, []);

  return (
    <div>
    {loading ? <Loading /> : (
          <Todo/>
    )}
  </div>
  );
};

export default App;
