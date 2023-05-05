import { useState } from "react";
import { useDispatch } from "react-redux";

function PizzaItem({ pizza: casserole }) {

    const dispatch = useDispatch();

    const handleAdd = () => {
      dispatch({type: 'ADD_TO_CART',
                payload: 7});
    }
    return (
        <div>
        <img src={casserole.image_path}/>
        <h3>{casserole.name}</h3>
        <h5>{casserole.description}</h5>
        <h4>{casserole.price}</h4>
        <button onClick={handleAdd}>
            Add
        </button>
        </div>
    );
}

export default PizzaItem;

