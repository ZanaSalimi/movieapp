import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const Middleware = [thunk]
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...Middleware, logger)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
