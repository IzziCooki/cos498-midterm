import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    axios
    .get("http://18.220.93.124:8080/api")
    .then(function (response) {
      setData(response.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Dean React App</h1>
      <h2>API Response - {data.message}</h2>
    </div>
  );
}
export default App;