import { useState } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useSelector } from 'react-redux';

function PizzaList() {

  const pizzas = useSelector((store) => store.pizzas);

  return (
    <ul>
      {
        pizzas.map((pizza) => {
          return (
            <PizzaItem
              key={pizza.id}
              pizza={pizza} />
            );
          })
        }
    </ul>
  );
}

export default PizzaList;
