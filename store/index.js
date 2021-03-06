import {createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducers from '../reducers/index';

let middleware = [thunkMiddleware, reduxLogger];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState){
    return createStoreWithMiddleware(reducers, initialState)
}
