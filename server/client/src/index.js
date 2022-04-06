import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}><App/></Provider>
);

console.log('STRIPE KEYS IS', process.env.REACT_APP_STRIPE_KEY)
console.log('Environment is', process.env.NODE_ENV)
