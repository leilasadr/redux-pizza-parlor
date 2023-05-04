import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const pizzas = (state = [], action) => {
    if(action.type === 'SET_PIZZAS') {
        const pizzaArray = action.payload;
        return pizzaArray;
    }
    return state;

};

// Store
const theStore = createStore(
    combineReducers({
        pizzas
    }),
    applyMiddleware(
        logger
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={theStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
