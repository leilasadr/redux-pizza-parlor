import { useState } from "react";

function PizzaItem({ pizza: casserole }) {
    return (
        <div>
        <img src={casserole.image_path}/>
        <h3>{casserole.name}</h3>
        <h5>{casserole.description}</h5>
        <h4>{casserole.price}</h4>
        <button>
            Add
        </button>
        </div>
    );
}

export default PizzaItem;

