import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider> , document.getElementById('root'));
registerServiceWorker();
