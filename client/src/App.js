import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
      const text = await response.text();
      return JSON.parse(text);
    }
    
    fetchData().then((data) => {
      setData(data);
    });
    ;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { data?.message || 'No message' }
        </p>

      </header>
    </div>
  );
}

export default App;
