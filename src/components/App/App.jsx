import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetchPizzas();
  }, [])

  const fetchPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      const pizzaArray = response.data;
    }).catch((error) => {
      console.log('GET error:', error);
    });
  };
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
