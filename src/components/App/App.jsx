import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import PizzaList from '../PizzaList/PizzaList';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';


function App() {

  useEffect(() => {
    fetchPizzas();
  }, []);

  const dispatch = useDispatch();

  const fetchPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      
      const pizzaArray = response.data;
      dispatch({
        type: 'SET_PIZZAS',
        payload: pizzaArray
      });

    }).catch((error) => {
      console.log('GET error:', error);
    });
  };

  const pizzas = useSelector((store) => store.pizzas);
  console.log('Pizza from Store:', pizzas);

  return (
    <div className='App'>

      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>

        <Route exact path="/">
          <PizzaList />
          <Link to="/customer-info">Customer Info</Link>
        </Route>

        <Route exact path="/customer-info">
          <div>
            <p>I WAS JUST GOING TO SAY...</p>
          </div>
        </Route>


      

      </Router>
    </div>
  );
}

export default App;
